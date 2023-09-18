package com.truongsyhoang.backend.controller;

import java.text.Normalizer;
import java.time.LocalDate;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.service.AuthorService;
import com.truongsyhoang.backend.service.FileStorageService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/authors")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthorController {
    @Autowired
    private AuthorService authorService;
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, 
    MediaType.APPLICATION_FORM_URLENCODED_VALUE,
    MediaType.MULTIPART_FORM_DATA_VALUE},
    produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@Valid @ModelAttribute AuthorDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result); 
        Author entity = authorService.insert(dto);
        dto.setId(entity.getId());
        dto.setImage(entity.getImage());
        
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

   
}
