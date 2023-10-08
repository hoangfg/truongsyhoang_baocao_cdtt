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

import com.truongsyhoang.backend.domain.Config;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.ConfigDTO;
import com.truongsyhoang.backend.dto.PublisherDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.ConfigReponsitory;

@Service
public class ConfigService {
    @Autowired
    private ConfigReponsitory configReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public Config insert(ConfigDTO dto) {

        List<?> foundedList = configReponsitory.findBySiteNameContainsIgnoreCase(dto.getSiteName());
        if (foundedList.size() > 0) {
            throw new AuthorException("Config site name is existed");
        }
        Config entity = new Config();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storeConfigImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }
       
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        // entity.setUpdatedAt(LocalDate.now());
        // entity.setUpdatedBy(1L);
        return configReponsitory.save(entity);
    }

    public Config update(Long id, ConfigDTO dto) {

        var found = configReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Config id not found");
        }

        Config entity = found.get();

        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();
        String originalImage = entity.getImage();

        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy", "image");

        if (dto.getImageFile() != null && dto.getImageFile().getSize() > 0) {

            String fileName = fileStorageService.storeConfigImageFile(dto.getImageFile());
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

       
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        return configReponsitory.save(entity);
    }

    public List<?> findAll() {
        return configReponsitory.findAll();
    }

    public Page<Config> findAll(Pageable pageable) {
        return configReponsitory.findAll(pageable);
    }

    public Page<Config> findByName(String name, Pageable pageable) {
        return configReponsitory.findBySiteNameContainsIgnoreCase(name, pageable);
    }

    public Config findById(Long id) {
        Optional<Config> found = configReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Config id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Config existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteImageFile(fileName);
        
        configReponsitory.delete(existed);
    }

    public Config status(Long id, ConfigDTO dto) {
        Config entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return configReponsitory.save(entity);
    }

   

}
