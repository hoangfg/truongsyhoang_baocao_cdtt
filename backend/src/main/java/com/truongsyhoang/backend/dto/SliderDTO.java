package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import ch.qos.logback.core.status.Status;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class SliderDTO implements Serializable {
    private Long id;

    private String name;

    private String slug;

    private String link;

    private String image;

    private Integer sortOrder;

    private String position;

    private LocalDate createdAt;

    private Long createdBy;

    private LocalDate updatedAt;

    private Long updatedBy;
    private Long idToUseForSortOrder;
    private int status;
    @JsonIgnore
    private MultipartFile imageFile;
}
