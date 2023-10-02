package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ch.qos.logback.core.status.Status;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookGenresDTO implements Serializable {
    private Long id;

    private String name;

    private String slug;

    private String detail;

    private int status;

    private LocalDate createdAt;

    private Long createdBy;
    private Long parentId;
    private LocalDate updatedAt;

    private Long updatedBy;

}
