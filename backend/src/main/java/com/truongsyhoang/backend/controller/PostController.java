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

import com.truongsyhoang.backend.domain.Post;
import com.truongsyhoang.backend.dto.PostDTO;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.PostService;
import com.truongsyhoang.backend.service.FileStorageService;
import com.truongsyhoang.backend.service.MapValidationErrorService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@Valid @ModelAttribute PostDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        Post entity = postService.insert(dto);

        dto.setId(entity.getId());
        System.out.println(entity);
        dto.setImage(entity.getImage());
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @Valid @ModelAttribute PostDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        Post entity = postService.update(id, dto);
        dto.setId(entity.getId());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = fileStorageService.loadPostFileAResource(fileName);
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

    @GetMapping
    public ResponseEntity<?> getPosts() {
        var list = postService.findAll();
        var newList = list.stream().map(item -> {
            PostDTO dto = new PostDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping("/find")
    public ResponseEntity<?> getPosts(@RequestParam("query") String query,
            @PageableDefault(size = 2, sort = "name", direction = Sort.Direction.ASC) Pageable pageable) {
        var list = postService.findByTitle(query, pageable);
        var newList = list.getContent().stream().map(item -> {
            PostDTO dto = new PostDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        var newPage = new PageImpl<>(newList, list.getPageable(), list.getTotalPages());
        return new ResponseEntity<>(newPage, HttpStatus.OK);
    }

    @GetMapping("/page")
    public ResponseEntity<?> getPosts(
            @PageableDefault(size = 5, sort = "name", direction = Sort.Direction.ASC) Pageable pageable) {
        var list = postService.findAll(pageable);
        var newList = list.stream().map(item -> {
            PostDTO dto = new PostDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPost(@PathVariable long id) {
        var entity = postService.findById(id);
        PostDTO dto = new PostDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable long id) {
        postService.deleteById(id);
        return new ResponseEntity<>("Tác giá có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id, @RequestBody PostDTO dto) {
        try {

            Post entity = postService.status(id, dto);
            return new ResponseEntity<>(entity, HttpStatus.OK);
        } catch (PublisherException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
