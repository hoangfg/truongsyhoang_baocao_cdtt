package com.truongsyhoang.backend.service;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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
        genres.setId(dto.getBookGenresId());
        entity.setBookGenres(genres);

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
        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        String generatedISBN = generateUniqueISBN();
        entity.setIsbn(generatedISBN);
        var saveBook = bookReponsitory.save(entity);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        dto.setId(saveBook.getId());
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
            dto.setBookGenresName(item.getBookGenres().getName());
            dto.setLanguageName(item.getLanguage().getName());
            dto.setPublisherName(item.getPublisher().getName());
            dto.setImageFileName(item.getImage().getFileName());

            return dto;
        }).collect(Collectors.toList());
        var newPage = new PageImpl<BookBriefDTO>(newList, list.getPageable(), list.getTotalElements());
        return newPage;

    }

}
