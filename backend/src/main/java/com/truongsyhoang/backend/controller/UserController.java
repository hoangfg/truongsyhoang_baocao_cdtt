package com.truongsyhoang.backend.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
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

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.User;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.dto.UserDTO;
import com.truongsyhoang.backend.exception.FileStorageException;
import com.truongsyhoang.backend.exception.PublisherException;
import com.truongsyhoang.backend.service.FileStorageService;
import com.truongsyhoang.backend.service.MapValidationErrorService;
import com.truongsyhoang.backend.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })

public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    private FileStorageService fileStorageService;
    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @PostMapping(consumes = { MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@Valid @ModelAttribute UserDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        User entity = userService.create(dto);

        dto.setId(entity.getId());
        dto.setImage(entity.getImage());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @Valid @ModelAttribute UserDTO dto, BindingResult result) {
        ResponseEntity<?> responseEntity = mapValidationErrorService.mapValidationFields(result);
        if (responseEntity != null) {
            return responseEntity;
        }
        User entity = userService.update(id, dto);
        dto.setId(entity.getId());

        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getUsers() {
        var list = userService.findAll();
        var newList = list.stream().map(item -> {
            UserDTO dto = new UserDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable long id) {
        var entity = userService.findById(id);
        UserDTO dto = new UserDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable long id) {
        userService.deleteById(id);
        return new ResponseEntity<>("Thành viên có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable("id") Long id, @RequestBody UserDTO dto) {
        try {

            User entity = userService.status(id, dto);
            return new ResponseEntity<>(entity, HttpStatus.OK);
        } catch (PublisherException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = fileStorageService.loadUserFileAResource(fileName);
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
}
