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
import com.truongsyhoang.backend.domain.PageTopic;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.PageTopicDTO;

import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.PageTopicReponsitory;

@Service
public class PageTopicService {
    @Autowired
    private PageTopicReponsitory pageTopicReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public PageTopic insert(PageTopicDTO dto) {

        List<?> foundedList = pageTopicReponsitory.findByTitleContainsIgnoreCase(dto.getTitle());
        if (foundedList.size() > 0) {
            throw new AuthorException("PageTopic name is existed");
        }
        PageTopic entity = new PageTopic();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storePostImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }

        
        String name = dto.getTitle();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        entity.setType("pageTopic");

        // entity.setUpdatedAt(LocalDate.now());
        // entity.setUpdatedBy(1L);
        return pageTopicReponsitory.save(entity);
    }

    public PageTopic update(Long id, PageTopicDTO dto) {

        var found = pageTopicReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("PageTopic id not found");
        }

        PageTopic entity = found.get();

        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();
        String originalImage = entity.getImage();

        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy", "image");

        if (dto.getImageFile() != null && dto.getImageFile().getSize() > 0) {

            String fileName = fileStorageService.storePostImageFile(dto.getImageFile());
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

        String name = dto.getTitle();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return pageTopicReponsitory.save(entity);
    }

    public List<?> findAll() {
        return pageTopicReponsitory.findAll();
    }

    public Page<PageTopic> findAll(Pageable pageable) {
        return pageTopicReponsitory.findAll(pageable);
    }

    public Page<PageTopic> findByTitle(String name, Pageable pageable) {
        return pageTopicReponsitory.findByTitleContainsIgnoreCase(name, pageable);
    }

    public PageTopic findById(Long id) {
        Optional<PageTopic> found = pageTopicReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("PageTopic id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        PageTopic existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteImageFile(fileName);

        pageTopicReponsitory.delete(existed);
    }

    public PageTopic status(Long id, PageTopicDTO dto) {
        PageTopic entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return pageTopicReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
