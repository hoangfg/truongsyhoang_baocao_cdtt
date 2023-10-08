package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class ConfigDTO implements Serializable {

    private Long id;

    private String siteName;

    private String metakey;

    private String metadesc;

    private String author;

    private String phone;

    private String email;

    private String facebook;

    private String twitter;

    private String youtube;

    private String googleplus;

    private int status;

    private LocalDate createdAt;

    private Long createdBy;

    private LocalDate updatedAt;

    private Long updatedBy;

    private String image;

    @JsonIgnore
    private MultipartFile imageFile;
}
