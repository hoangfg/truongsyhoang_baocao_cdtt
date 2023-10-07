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

import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.TopicDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.TopicReponsitory;

@Service
public class TopicService {
    @Autowired
    private TopicReponsitory topicReponsitory;

    public Topic insert(TopicDTO dto) {

        List<?> foundedList = topicReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("Topic name is existed");
        }
        Topic entity = new Topic();
        BeanUtils.copyProperties(dto, entity);
        System.out.println(dto.getParentId());

        if (dto.getParentId() != 0L && dto.getParentId() != null) {

            entity.setParentId(dto.getParentId());
        }

        // System.out.println(entity.getParentId());
        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);

        return topicReponsitory.save(entity);
    }

    public Topic update(Long id, TopicDTO dto) {

        var found = topicReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Topic id not found");
        }

        Topic entity = found.get();

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

        return topicReponsitory.save(entity);
    }

    public List<?> findAll() {
        return topicReponsitory.findAll();
    }

    public Page<Topic> findAll(Pageable pageable) {
        return topicReponsitory.findAll(pageable);
    }

    public Page<Topic> findByName(String name, Pageable pageable) {
        return topicReponsitory.findByNameContainsIgnoreCase(name, pageable);
    }

    public Topic findById(Long id) {
        Optional<Topic> found = topicReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Topic id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Topic existed = findById(id);
        topicReponsitory.delete(existed);
    }

    public Topic status(Long id, TopicDTO dto) {
        Topic entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return topicReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }
}
