package com.truongsyhoang.backend.controller;

import java.net.http.HttpRequest;
import java.text.Normalizer;
import java.time.LocalDate;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Publisher;
import com.truongsyhoang.backend.dto.BookLanguageDTO;

import com.truongsyhoang.backend.exception.FileNotFoundException;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.exception.PublisherException;

import com.truongsyhoang.backend.service.BookLanguageService;
import com.truongsyhoang.backend.service.FileStorageService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/languages")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })

public class BookLanguageController {
    @Autowired
    private BookLanguageService bookLanguageService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping()
    public ResponseEntity<?> create(@Valid @ModelAttribute BookLanguageDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        BookLanguage entity = bookLanguageService.insert(dto);
        dto.setId(entity.getId());
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @Valid @ModelAttribute BookLanguageDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        BookLanguage entity = bookLanguageService.update(id, dto);
        dto.setId(entity.getId());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getLanguage() {
        var list = bookLanguageService.findAll();
        var newList = list.stream().map(item -> {
            BookLanguageDTO dto = new BookLanguageDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    // @GetMapping("/find")
    // public ResponseEntity<?> getLanguage(@RequestParam("query") String query,
    // @PageableDefault(size = 2, sort = "name", direction = Sort.Direction.ASC)
    // Pageable pageable) {
    // var list = bookLanguageService.findByName(query, pageable);
    // var newList = list.getContent().stream().map(item -> {
    // BookLanguageDTO dto = new BookLanguageDTO();
    // BeanUtils.copyProperties(item, dto);
    // return dto;
    // }).collect(Collectors.toList());
    // var newPage = new PageImpl<>(newList, list.getPageable(),
    // list.getTotalPages());
    // return new ResponseEntity<>(newPage, HttpStatus.OK);
    // }

    @GetMapping("/page")
    public ResponseEntity<?> getLanguage(
            @PageableDefault(size = 5, sort = "name", direction = Sort.Direction.ASC) Pageable pageable) {
        var list = bookLanguageService.findAll(pageable);
        var newList = list.stream().map(item -> {
            BookLanguageDTO dto = new BookLanguageDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGenre(@PathVariable long id) {
        var entity = bookLanguageService.findById(id);
        BookLanguageDTO dto = new BookLanguageDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGenre(@PathVariable long id) {
        bookLanguageService.deleteById(id);
        return new ResponseEntity<>("Tác giá có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }

    // @PatchMapping("/{id}/status")
    // public ResponseEntity<?> changeStatus(@PathVariable("id") Long id,
    // @RequestBody BookLanguageDTO dto) {
    // try {

    // BookLanguage entity = bookLanguageService.status(id, dto);
    // return new ResponseEntity<>(entity, HttpStatus.OK);
    // } catch (PublisherException e) {
    // return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    // }
    // }

}
