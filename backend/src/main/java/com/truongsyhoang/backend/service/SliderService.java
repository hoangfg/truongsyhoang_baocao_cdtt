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
import com.truongsyhoang.backend.domain.Slider;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.SliderDTO;

import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.repository.SliderReponsitory;

@Service
public class SliderService {
    @Autowired
    private SliderReponsitory sliderReponsitory;
    @Autowired
    private FileStorageService fileStorageService;

    public Slider insert(SliderDTO dto) {

        List<?> foundedList = sliderReponsitory.findByNameContainsIgnoreCase(dto.getName());
        if (foundedList.size() > 0) {
            throw new AuthorException("Slider name is existed");
        }
        Slider entity = new Slider();
        Slider sliderWithSortOrder = sliderReponsitory.findById(dto.getIdToUseForSortOrder())
                .orElse(new Slider());
        Integer sortOrder = sliderWithSortOrder.getSortOrder();
        int newSortOrder = (sortOrder != null) ? sortOrder + 1 : 0;
        BeanUtils.copyProperties(dto, entity);

        if (dto.getImageFile() != null) {
            String fileName = fileStorageService.storeSliderImageFile(dto.getImageFile());
            entity.setImage(fileName);
            dto.setImageFile(null);
        }

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);

        entity.setSortOrder(newSortOrder);
        // entity.setUpdatedAt(LocalDate.now());
        // entity.setUpdatedBy(1L);
        return sliderReponsitory.save(entity);
    }

    public Slider update(Long id, SliderDTO dto) {

        var found = sliderReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Slider id not found");
        }

        Slider entity = found.get();

        LocalDate originalCreatedAt = entity.getCreatedAt();
        Long originalCreatedBy = entity.getCreatedBy();
        String originalImage = entity.getImage();
        Slider sliderWithSortOrder = sliderReponsitory.findById(dto.getIdToUseForSortOrder())
                .orElse(new Slider());
        Integer sortOrder = sliderWithSortOrder.getSortOrder();
        int newSortOrder = (sortOrder != null) ? sortOrder + 1 : 0;
        BeanUtils.copyProperties(dto, entity, "createdAt", "createdBy", "image");
        entity.setSortOrder(newSortOrder);
        if (dto.getImageFile() != null && dto.getImageFile().getSize() > 0) {

            String fileName = fileStorageService.storeSliderImageFile(dto.getImageFile());
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

        return sliderReponsitory.save(entity);
    }

    public List<?> findAll() {
        return sliderReponsitory.findAll();
    }

    public Page<Slider> findAll(Pageable pageable) {
        return sliderReponsitory.findAll(pageable);
    }

    public Page<Slider> findByName(String name, Pageable pageable) {
        return sliderReponsitory.findByNameContainsIgnoreCase(name, pageable);
    }

    public Slider findById(Long id) {
        Optional<Slider> found = sliderReponsitory.findById(id);
        if (found.isEmpty()) {
            throw new AuthorException("Slider id: " + id + " does not esisted");
        }
        return found.get();
    }

    public void deleteById(Long id) {
        Slider existed = findById(id);
        String fileName = existed.getImage();
        fileStorageService.deleteSliderImageFile(fileName);

        sliderReponsitory.delete(existed);
    }

    public Slider status(Long id, SliderDTO dto) {
        Slider entity = findById(id);
        entity.setStatus(dto.getStatus());
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        return sliderReponsitory.save(entity);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }

}
