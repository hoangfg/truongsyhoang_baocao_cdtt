package com.truongsyhoang.backend.controller;

import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.BookDTO;
import com.truongsyhoang.backend.dto.BookImagesDTO;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.service.BookService;
import com.truongsyhoang.backend.service.FileStorageService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;
    @Autowired
    private BookService bookService;

    @PostMapping(value = "/images/one", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile imageFile) {
        var fileInfo = fileStorageService.storeUploadBookImageFile(imageFile);
        BookImagesDTO dto = new BookImagesDTO();
        BeanUtils.copyProperties(fileInfo, dto);
        dto.setStatus("done");
        dto.setUrl("http://localhost:8080/api/products/images/" + fileInfo.getFileName());

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/images/{fileName:.+}")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = fileStorageService.loadBookFileAResource(fileName);
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (Exception e) {
            throw new FileStorageException("could not delermine file type.");
        }
        if (contentType == null) {
            contentType = "application/octer-stream";
        }

        return ResponseEntity
                .ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; fileName=\""
                        + resource.getFilename() + "\"")
                .body(resource);

    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody BookDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        var saveDto = bookService.insert(dto);
        return new ResponseEntity<>(saveDto, HttpStatus.CREATED);
    }

    @GetMapping("/find")
    public ResponseEntity<?> getBooks(@RequestParam("query") String query,
            @PageableDefault(size = 2, sort = "name", 
            direction = Sort.Direction.ASC) Pageable pageable) {
        
       
        return new ResponseEntity<>(bookService.getBookBriefsByName(query, pageable), HttpStatus.OK);
    }

}
