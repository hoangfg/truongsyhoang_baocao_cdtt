package com.truongsyhoang.backend.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.BindResult;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
import com.truongsyhoang.backend.service.MapValidationErrorService;
import com.truongsyhoang.backend.service.PublisherService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/truongsyhoang/publisher")
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
        entity = publisherService.save(entity);
        dto.setId(entity.getId());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody PublisherDTO dto) {
        Publisher entity = new Publisher();
        BeanUtils.copyProperties(dto, entity);
        entity = publisherService.update(id, entity);
        dto.setId(entity.getId());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(publisherService.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/page")
    public ResponseEntity<?> getAll(
            @PageableDefault(size = 10, sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return new ResponseEntity<>(publisherService.findAll(pageable), HttpStatus.ACCEPTED);
    }
    @GetMapping("/{id}/get")
    public ResponseEntity<?> getById(@PathVariable("id")  Long id) {
        return new ResponseEntity<>(publisherService.findById(id), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
     public ResponseEntity<?> deleteById(@PathVariable("id")  Long id) {
        publisherService.deleteById(id);
        return new ResponseEntity<>("Publisher id: "+id+" đã bị xóa", HttpStatus.OK);
    }
}
