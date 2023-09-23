package com.truongsyhoang.backend.service;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.BookLanguageDTO;
import com.truongsyhoang.backend.dto.PublisherDTO;
import com.truongsyhoang.backend.exception.AuthorException;

import com.truongsyhoang.backend.repository.BookLanguageReponsitory;

@Service
public class BookLanguageService {
    @Autowired
    private BookLanguageReponsitory bookLanguageReponsitory;

    public BookLanguage insert(BookLanguageDTO dto) {

        List<?> foundedList = bookLanguageReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("BookLanguage name is existed");
        }
        BookLanguage entity = new BookLanguage();
        BeanUtils.copyProperties(dto, entity);

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return bookLanguageReponsitory.save(entity);
    }

    public BookLanguage update(Long id, BookLanguageDTO dto) {

        var found = bookLanguageReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("BookLanguage id not found");
        }

        BookLanguage entity = found.get();

        // Preserve original values
        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();

        // Copy properties from DTO, excluding createdAt, createdBy, and image
        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy");

        entity.setCreatedAt(originalCreatedAt);
        entity.setCreatedBy(originalCreatedBy);

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return bookLanguageReponsitory.save(entity);
    }

    public List<?> findAll() {
        return bookLanguageReponsitory.findAll();
    }

    public Page<BookLanguage> findAll(Pageable pageable) {
        return bookLanguageReponsitory.findAll(pageable);
    }

    public Page<BookLanguage> findByName(String name, Pageable pageable) {
        return bookLanguageReponsitory.findByNameContainsIgnoreCase(name, pageable);
    }

    public BookLanguage findById(Long id) {
        Optional<BookLanguage> found = bookLanguageReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("BookLanguage id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        BookLanguage existed = findById(id);
        bookLanguageReponsitory.delete(existed);
    }

    

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
