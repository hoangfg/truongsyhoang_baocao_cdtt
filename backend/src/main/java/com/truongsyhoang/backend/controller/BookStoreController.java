package com.truongsyhoang.backend.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
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
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.BookStore;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.BookStoreBriefDTO;
import com.truongsyhoang.backend.dto.BookStoreDTO;
import com.truongsyhoang.backend.dto.PageTopicDTO;
import com.truongsyhoang.backend.exception.AuthorException;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.BookStoreService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/bookStore")
@CrossOrigin(origins = "http://localhost:3000")
public class BookStoreController {
    @Autowired
    private BookStoreService bookStoreService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping
    public ResponseEntity<BookStoreDTO> create(@RequestBody BookStoreDTO dto) {
        System.out.println(dto);
        try {
            BookStoreDTO createdStore = bookStoreService.insert(dto);
            return new ResponseEntity<>(createdStore, HttpStatus.CREATED);
        } catch (AuthorException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookStoreDTO> getById(@PathVariable Long id) {
        Optional<BookStore> optionalBookStore = bookStoreService.getById(id);
        if (optionalBookStore.isPresent()) {
            BookStoreDTO storeDTO = new BookStoreDTO();
            BeanUtils.copyProperties(optionalBookStore.get(), storeDTO);
            return new ResponseEntity<>(storeDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping(value = "/{id}", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @RequestBody BookStoreDTO dto) {
        try {
            BookStoreDTO updatedStore = bookStoreService.update(id, dto);
            return new ResponseEntity<>(updatedStore, HttpStatus.OK);
        } catch (AuthorException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        bookStoreService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public List<BookStoreBriefDTO> getAllBookStores() {
        return bookStoreService.findAll();
    }

}
