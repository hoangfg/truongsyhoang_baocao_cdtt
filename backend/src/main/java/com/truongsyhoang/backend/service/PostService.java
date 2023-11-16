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
import com.truongsyhoang.backend.domain.Post;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.PostDTO;

import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.PostReponsitory;

@Service
public class PostService {
    @Autowired
    private PostReponsitory postReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public Post insert(PostDTO dto) {

        List<?> foundedList = postReponsitory.findByTitleContainsIgnoreCase(dto.getTitle());
        if (foundedList.size() > 0) {
            throw new AuthorException("Post name is existed");
        }
        Post entity = new Post();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storePostImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }
        if (dto.getTopicId() != 0) {
            var topic = new Topic();
            topic.setId(dto.getTopicId());
            entity.setTopic(topic);
        }

        String name = dto.getTitle();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        entity.setType(dto.getType());

        // entity.setUpdatedAt(LocalDate.now());
        // entity.setUpdatedBy(1L);
        return postReponsitory.save(entity);
    }

    public Post update(Long id, PostDTO dto) {

        var found = postReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Post id not found");
        }

        Post entity = found.get();

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
        entity.setType(dto.getType());

        // Restore original values
        entity.setCreatedAt(originalCreatedAt);
        entity.setCreatedBy(originalCreatedBy);
        if (dto.getTopicId() != 0) {
            var topic = new Topic();
            topic.setId(dto.getTopicId());
            entity.setTopic(topic);
        }

        String name = dto.getTitle();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return postReponsitory.save(entity);
    }

    public List<?> findAll() {
        return postReponsitory.findAll();
    }

    public Page<Post> findAll(Pageable pageable) {
        return postReponsitory.findAll(pageable);
    }

    public Page<Post> findByTitle(String name, Pageable pageable) {
        return postReponsitory.findByTitleContainsIgnoreCase(name, pageable);
    }

    public Post findById(Long id) {
        Optional<Post> found = postReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Post id: " + id + " does not esisted");
        }
        return found.get();
    }

    public Post findBySlug(String slug) {
        Optional<Post> found = postReponsitory.findBySlug(slug);
        if (found.isEmpty()) {
            throw new AuthorException("Post slug: " + slug + " does not esisted");
        }

        if (found.get().getStatus() == 1) {
            throw new AuthorException("Post slug: " + slug + " is not published");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Post existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteImageFile(fileName);

        postReponsitory.delete(existed);
    }

    public Post status(Long id, PostDTO dto) {
        Post entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return postReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
