package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.truongsyhoang.backend.domain.Role;
import com.truongsyhoang.backend.domain.Status;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class UserDTO implements Serializable {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String username;
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    private String address;
    private Integer gender;
    private String image;
    private Long roleId;
    private Role role;
    private Long createdBy;
    private Long updatedBy;
    private int status;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    @JsonIgnore
    private MultipartFile imageFile;
}
