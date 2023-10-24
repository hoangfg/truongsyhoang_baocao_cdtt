package com.truongsyhoang.backend.controller;

import java.time.LocalDate;
import java.util.regex.Pattern;
import java.text.Normalizer;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.PublisherDTO;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.MapValidationErrorService;
import com.truongsyhoang.backend.service.PublisherService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/publishers")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })

public class PublisherController {
    @Autowired
    PublisherService publisherService;
    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody PublisherDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }

        Publisher entity = new Publisher();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getParentId() != null) {
            var publisher = new Publisher();
            publisher.setId(dto.getParentId());
            entity.setParentId(publisher);
        } else {
            entity.setParentId(null);
        }

        String name = dto.getName();
        String slug = generateSlug(name);
        entity.setSlug(slug);
        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        entity = publisherService.save(entity);
        dto.setId(entity.getId());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody PublisherDTO dto) {
        System.out.println(dto);
        Publisher entity = new Publisher();
        BeanUtils.copyProperties(dto, entity);

        if (dto.getParentId() != null) {
            Publisher parent = new Publisher();
            parent.setId(dto.getParentId());
            entity.setParentId(parent);
        }
        String name = dto.getName();
        String slug = generateSlug(name);
        // entity.setParentId(dto.getParent_id().getId());
        entity.setSlug(slug);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);
        entity = publisherService.update(id, entity);

        dto.setId(entity.getId());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id, @RequestBody PublisherDTO dto) {
        try {

            Publisher entity = publisherService.status(id, dto);
            return new ResponseEntity<>(entity, HttpStatus.OK);
        } catch (PublisherException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(publisherService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/page")
    public ResponseEntity<?> getAll(
            @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return new ResponseEntity<>(publisherService.findAll(pageable), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(publisherService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
        publisherService.deleteById(id);
        return new ResponseEntity<>("Publisher id: " + id + " đã bị xóa", HttpStatus.OK);
    }

    public static String generateSlug(String name) {
        String normalized = Normalizer.normalize(name, Normalizer.Form.NFD);
        Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
        String slug = pattern.matcher(normalized).replaceAll("").toLowerCase();
        slug = slug.replaceAll("\\s+", "-");
        return slug;
    }
}
