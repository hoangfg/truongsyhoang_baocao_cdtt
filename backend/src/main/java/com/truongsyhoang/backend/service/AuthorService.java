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

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.dto.PublisherDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.AuthorReponsitory;

@Service
public class AuthorService {
    @Autowired
    private AuthorReponsitory authorReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public Author insert(AuthorDTO dto) {
        System.out.println(dto);
        List<?> foundedList = authorReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("Author name is existed");
        }
        Author entity = new Author();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storeAuthorImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }
        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        // entity.setUpdatedAt(LocalDate.now());
        // entity.setUpdatedBy(1L);
        return authorReponsitory.save(entity);
    }

    public Author update(Long id, AuthorDTO dto) {

        var found = authorReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Author id not found");
        }

        Author entity = found.get();

        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();
        String originalImage = entity.getImage();

        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy", "image");

        if (dto.getImageFile() != null && dto.getImageFile().getSize() > 0) {

            String fileName = fileStorageService.storeAuthorImageFile(dto.getImageFile());
            entity.setImage(fileName);
            if (originalImage != null) {
                fileStorageService.deleteImageFile(originalImage);
            }
        } else {

            entity.setImage(originalImage);
        }

        // Restore original values
        entity.setCreatedAt(originalCreatedAt);
        entity.setCreatedBy(originalCreatedBy);

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return authorReponsitory.save(entity);
    }

    public List<?> findAll() {
        return authorReponsitory.findAll();
    }

    public Page<Author> findAll(Pageable pageable) {
        return authorReponsitory.findAll(pageable);
    }

    public Page<Author> findByName(String name, Pageable pageable) {
        return authorReponsitory.findByNameContainsIgnoreCase(name, pageable);
    }

    public Author findById(Long id) {
        Optional<Author> found = authorReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Author id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Author existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteImageFile(fileName);

        authorReponsitory.delete(existed);
    }

    public Author status(Long id, AuthorDTO dto) {
        Author entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return authorReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
