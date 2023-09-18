package com.truongsyhoang.backend.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.User;
import com.truongsyhoang.backend.dto.UserDTO;
import com.truongsyhoang.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.ACCEPTED);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserDTO dto) {

        User entity = new User();
        BeanUtils.copyProperties(dto, entity);

        entity.setCreatedAt(LocalDate.now());
        entity.setCreatedBy(1L);
        entity.setUpdatedAt(LocalDate.now());
        entity.setUpdatedBy(1L);

        entity = userService.save(entity);
        dto.setId(entity.getId());
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    // @PostMapping("/login")
    // public ResponseEntity<String> login(@RequestParam String username,
    // @RequestParam String password) {
    // boolean isAuthenticated = userService.authenticate(username, password);
    // if (isAuthenticated) {
    // return ResponseEntity.ok("Đăng nhập thành công!");
    // } else {
    // return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Đăng nhập thất
    // bại");
    // }
    // }
}
