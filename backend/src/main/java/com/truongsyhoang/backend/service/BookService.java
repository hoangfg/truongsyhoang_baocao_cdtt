package com.truongsyhoang.backend.service;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.regex.Pattern;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.Book;
import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.BookImages;
import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.BookBriefDTO;
import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.BookImagesDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.BookImagesReponsitory;
import com.truongsyhoang.backend.repository.BookReponsitory;

@Service
public class BookService {
    @Autowired
    private BookReponsitory bookReponsitory;

    @Autowired
    private BookImagesReponsitory bookImagesReponsitory;

    @Autowired
    private FileStorageService fileStorageService;

    @Transactional(rollbackFor = Exception.class)
    public BookDTO insert(BookDTO dto) {
        Book entity = new Book();
        BeanUtils.copyProperties(dto, entity);
        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        String generatedISBN = generateUniqueISBN();
        entity.setIsbn(generatedISBN);
        entity.setCreatedBy(1L);

        var author = new Author();
        author.setId(dto.getAuthorId());
        entity.setAuthor(author);

        var publisher = new Publisher();
        publisher.setId(dto.getPublisherId());
        entity.setPublisher(publisher);

        var language = new BookLanguage();
        language.setId(dto.getLanguageId());
        entity.setLanguage(language);

        var genres = new BookGenres();
        genres.setId(dto.getGenresId());
        entity.setGenres(genres);

        if (dto.getImage() != null) {
            BookImages img = new BookImages();
            BeanUtils.copyProperties(dto.getImage(), img);
            var savedImg = bookImagesReponsitory.save(img);
            entity.setImage(savedImg);
        }
        if (dto.getImages() != null && dto.getImages().size() > 0) {
            var entityList = saveBookEntity(dto);
            entity.setImages(entityList);
        }

        var saveBook = bookReponsitory.save(entity);

        dto.setId(saveBook.getId());
        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public BookDTO update(Long id, BookDTO dto) {
        var found = bookReponsitory.findById(id).orElseThrow(() -> new AuthorException("Book id không tồn tại"));
        String ignoreFields[] = new String[] { "createdBy", "images", "updatedBy" };
        BeanUtils.copyProperties(dto, found, ignoreFields);

        if (dto.getImage().getId() != null && found.getImage().getId() != dto.getImage().getId()) {
            fileStorageService.deleteBookImageFile(found.getImage().getFileName());
            BookImages img = new BookImages();
            BeanUtils.copyProperties(dto.getImage(), img);
            bookImagesReponsitory.save(img);
            found.setImage(img);
        }
        var author = new Author();
        author.setId(dto.getAuthorId());
        found.setAuthor(author);

        var publisher = new Publisher();
        publisher.setId(dto.getPublisherId());
        found.setPublisher(publisher);

        var language = new BookLanguage();
        language.setId(dto.getLanguageId());
        found.setLanguage(language);

        var genres = new BookGenres();
        genres.setId(dto.getGenresId());
        found.setGenres(genres);

        String name = dto.getName();
        String slug = generateSlug(name);
        found.setSlug(slug);

        found.setUpdatedBy(1L);
        if (dto.getImages().size() > 0) {
            var toDeleteFile = new ArrayList<BookImages>();
            found.getImages().stream().forEach(item -> {
                var existed = dto.getImages().stream().anyMatch(img -> img.getId() == item.getId());
                if (!existed) {
                    toDeleteFile.add(item);
                }
            });
            if (toDeleteFile.size() > 0) {
                toDeleteFile.stream().forEach(item -> {
                    fileStorageService.deleteBookImageFile(item.getFileName());
                    bookImagesReponsitory.delete(item);
                });
            }
            var imgList = dto.getImages().stream().map(item -> {
                BookImages img = new BookImages();
                BeanUtils.copyProperties(item, img);
                return img;
            }).collect(Collectors.toSet());
            found.setImages(imgList);
        }
        var saveEntity = bookReponsitory.save(found);
        dto.setId(saveEntity.getId());
        return dto;
    }

    private Set<BookImages> saveBookEntity(BookDTO dto) {

        var entityList = new HashSet<BookImages>();
        var newList = dto.getImages().stream().map(item -> {
            BookImages img = new BookImages();
            BeanUtils.copyProperties(item, img);
            var saveImg = bookImagesReponsitory.save(img);
            item.setId(saveImg.getId());
            entityList.add(saveImg);
            return item;
        }).collect(Collectors.toList());
        dto.setImages(newList);
        return entityList;
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

    public String generateUniqueISBN() {
        UUID uuid = UUID.randomUUID();
        return "ISBN-" + uuid.toString();
    }

    public Page<BookBriefDTO> getBookBriefsByName(String name, Pageable pageable) {
        var list = bookReponsitory.findByNameContainsIgnoreCase(name, pageable);
        var newList = list.getContent().stream().map(item -> {
            BookBriefDTO dto = new BookBriefDTO();
            BeanUtils.copyProperties(item, dto);
            dto.setAuthorName(item.getAuthor().getName());
            dto.setBookGenresName(item.getGenres().getName());
            dto.setLanguageName(item.getLanguage().getName());
            dto.setPublisherName(item.getPublisher().getName());
            dto.setImageFileName(item.getImage().getFileName());

            return dto;
        }).collect(Collectors.toList());
        var newPage = new PageImpl<BookBriefDTO>(newList, list.getPageable(), list.getTotalElements());
        return newPage;

    }

    public BookDTO getBookById(Long id) {
        var found = bookReponsitory.findById(id)
                .orElseThrow(() -> new AuthorException("Book Id Khồn tồn tại"));
        BookDTO dto = new BookDTO();
        BeanUtils.copyProperties(found, dto);

        dto.setAuthorId(found.getAuthor().getId());

        dto.setLanguageId(found.getLanguage().getId());
        dto.setPublisherId(found.getPublisher().getId());
        dto.setGenresId(found.getGenres().getId());
        var images = found.getImages().stream().map(item -> {
            BookImagesDTO imgDto = new BookImagesDTO();
            BeanUtils.copyProperties(item, imgDto);
            return imgDto;
        }).collect(Collectors.toList());
        dto.setImages(images);

        BookImagesDTO imageDTO = new BookImagesDTO();
        BeanUtils.copyProperties(found.getImage(), imageDTO);
        dto.setImage(imageDTO);

        return dto;
    }

    public ResponseEntity<?> findAll() {
        var list = bookReponsitory.findAll();
        var newList = list.stream().map(item -> {
            BookBriefDTO dto = new BookBriefDTO();
            BeanUtils.copyProperties(item, dto);
            if (item.getAuthor() != null) {
                dto.setAuthorName(item.getAuthor().getName());
            }
            if (item.getGenres() != null) {
                dto.setBookGenresName(item.getGenres().getName());
            }
            if (item.getLanguage() != null) {
                dto.setLanguageName(item.getLanguage().getName());
            }
            if (item.getPublisher() != null) {
                dto.setPublisherName(item.getPublisher().getName());
            }
            if (item.getImage() != null) {
                dto.setImageFileName(item.getImage().getFileName());
            }

            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteById(Long id) {
        var found = bookReponsitory.findById(id).orElseThrow(() -> new AuthorException("Book not found"));
        if (found.getImage() != null) {
            fileStorageService.deleteBookImageFile(found.getImage().getFileName());
            bookImagesReponsitory.delete(found.getImage());
        }
        if (found.getImages().size() > 0) {
            found.getImages().stream().forEach(item -> {
                fileStorageService.deleteBookImageFile(item.getFileName());
                bookImagesReponsitory.delete(item);
            });
        }
        bookReponsitory.delete(found);

    }
}
