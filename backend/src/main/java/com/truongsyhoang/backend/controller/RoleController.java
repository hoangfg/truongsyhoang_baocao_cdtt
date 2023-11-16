package com.truongsyhoang.backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.Role;
import com.truongsyhoang.backend.dto.AuthorDTO;
import com.truongsyhoang.backend.dto.PublisherDTO;
import com.truongsyhoang.backend.dto.RoleDTO;
import com.truongsyhoang.backend.service.RoleService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/roles")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class RoleController {
    @Autowired
    private RoleService roleService;

    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody @Valid RoleDTO roleDTO) {
        Role createdRole = roleService.create(roleDTO);
        return new ResponseEntity<>(createdRole, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        List<Role> roles = roleService.findAll();
        var newList = roles.stream().map(item -> {
            RoleDTO dto = new RoleDTO();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());
        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody RoleDTO dto) {
        Role updatedRole = roleService.update(id, dto);
        return new ResponseEntity<>(updatedRole, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getRole(@PathVariable long id) {
        var entity = roleService.findById(id);
        RoleDTO dto = new RoleDTO();
        BeanUtils.copyProperties(entity, dto);

        return new ResponseEntity<>(entity, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable long id) {
        roleService.delete(id);
        return new ResponseEntity<>("Role có id: " + id + " đã xóa thành công", HttpStatus.OK);
    }
}
