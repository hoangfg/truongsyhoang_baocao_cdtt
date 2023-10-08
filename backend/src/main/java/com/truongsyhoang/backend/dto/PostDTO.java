package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.truongsyhoang.backend.domain.Topic;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class PostDTO implements Serializable {
    private Long id;

    private String title;

    private String metakey;

    private String metadesc;
    private String detail;

    private String slug;
    private String type;

    private int status;

    private LocalDate createdAt;

    private Long createdBy;
    private Long topicId;
    private Topic topic;

    private LocalDate updatedAt;

    private Long updatedBy;
    private String image;
    @JsonIgnore
    private MultipartFile imageFile;
}
