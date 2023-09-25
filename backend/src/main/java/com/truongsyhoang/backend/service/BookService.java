package com.truongsyhoang.backend.service;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.Book;
import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.BookImages;
import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Publisher;
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
        var saveBook = bookReponsitory.save(entity);
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
}
