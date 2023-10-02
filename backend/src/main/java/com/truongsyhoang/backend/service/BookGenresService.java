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

import com.truongsyhoang.backend.domain.BookGenres;

import com.truongsyhoang.backend.dto.BookGenresDTO;

import com.truongsyhoang.backend.exception.AuthorException;

import com.truongsyhoang.backend.repository.BookGenresReponsitory;

@Service
public class BookGenresService {
    @Autowired
    private BookGenresReponsitory bookGenresReponsitory;

    public BookGenres insert(BookGenresDTO dto) {

        List<?> foundedList = bookGenresReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("BookGenres name is existed");
        }
        BookGenres entity = new BookGenres();
        BeanUtils.copyProperties(dto, entity);
        System.out.println(dto.getParentId());

        if (dto.getParentId() != 0L && dto.getParentId() != null) {

            entity.setParentId(dto.getParentId());
        }

        System.out.println(entity.getParentId());
        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);

        return bookGenresReponsitory.save(entity);
    }

    public BookGenres update(Long id, BookGenresDTO dto) {

        var found = bookGenresReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("BookGenres id not found");
        }

        BookGenres entity = found.get();

        // Preserve original values
        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();

        // Copy properties from DTO, excluding createdAt, createdBy, and image
        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy");
        if (dto.getParentId() != 0L && dto.getParentId() != null) {

            entity.setParentId(dto.getParentId());
        }
        entity.setCreatedAt(originalCreatedAt);
        entity.setCreatedBy(originalCreatedBy);

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return bookGenresReponsitory.save(entity);
    }

    public List<?> findAll() {
        return bookGenresReponsitory.findAll();
    }

    public Page<BookGenres> findAll(Pageable pageable) {
        return bookGenresReponsitory.findAll(pageable);
    }

    public Page<BookGenres> findByName(String name, Pageable pageable) {
        return bookGenresReponsitory.findByNameContainsIgnoreCase(name, pageable);
    }

    public BookGenres findById(Long id) {
        Optional<BookGenres> found = bookGenresReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("BookGenres id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        BookGenres existed = findById(id);
        bookGenresReponsitory.delete(existed);
    }

    public BookGenres status(Long id, BookGenresDTO dto) {
        BookGenres entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return bookGenresReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
