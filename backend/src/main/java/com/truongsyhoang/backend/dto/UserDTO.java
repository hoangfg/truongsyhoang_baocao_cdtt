package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.truongsyhoang.backend.domain.Status;

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
    private String password;
    private String rememberToken;
    private String activedToken;
    private LocalDate expiresAt;
    private String address;
    private Integer gender;
    private String image;
    private String roles;
    private Long createdBy;
    private Long updatedBy;
    private Status status;
    private LocalDate createdAt;
    private LocalDate updatedAt;
}
