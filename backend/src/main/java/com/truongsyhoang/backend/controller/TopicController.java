package com.truongsyhoang.backend.controller;

import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.Topic;
import com.truongsyhoang.backend.dto.TopicDTO;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.TopicService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/topic")
@CrossOrigin(origins = "http://localhost:3000")
public class TopicController {
    @Autowired
    private TopicService topicService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping()
    public ResponseEntity<?> create(@Valid @ModelAttribute TopicDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        Topic entity = topicService.insert(dto);
        dto.setId(entity.getId());
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @Valid @ModelAttribute TopicDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        Topic entity = topicService.update(id, dto);
        dto.setId(entity.getId());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getTopics() {
        var list = topicService.findAll();
        var newList = list.stream().map(item -> {
            TopicDTO dto = new TopicDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    // @GetMapping("/find")
    // public ResponseEntity<?> getTopics(@RequestParam("query") String query,
    // @PageableDefault(size = 2, sort = "name", direction = Sort.Direction.ASC)
    // Pageable pageable) {
    // var list = topicService.findByName(query, pageable);
    // var newList = list.getContent().stream().map(item -> {
    // TopicDTO dto = new TopicDTO();
    // BeanUtils.copyProperties(item, dto);
    // return dto;
    // }).collect(Collectors.toList());
    // var newPage = new PageImpl<>(newList, list.getPageable(),
    // list.getTotalPages());
    // return new ResponseEntity<>(newPage, HttpStatus.OK);
    // }

    @GetMapping("/page")
    public ResponseEntity<?> getTopics(
            @PageableDefault(size = 5, sort = "name", direction = Sort.Direction.ASC) Pageable pageable) {
        var list = topicService.findAll(pageable);
        var newList = list.stream().map(item -> {
            TopicDTO dto = new TopicDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTopic(@PathVariable long id) {
        var entity = topicService.findById(id);
        TopicDTO dto = new TopicDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTopic(@PathVariable long id) {
        topicService.deleteById(id);
        return new ResponseEntity<>("Tác giá có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id, @RequestBody TopicDTO dto) {
        try {

            Topic entity = topicService.status(id, dto);
            return new ResponseEntity<>(entity, HttpStatus.OK);
        } catch (PublisherException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
