package com.truongsyhoang.backend.dto;

import java.time.LocalDate;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class TopicDTO {
    private Long id;

    private String name;

    private String metakey;

    private String metadesc;

    private String slug;

    private int status;

    private LocalDate createdAt;

    private Long createdBy;

    private Long parentId;

    private LocalDate updatedAt;

    private Long updatedBy;
}
