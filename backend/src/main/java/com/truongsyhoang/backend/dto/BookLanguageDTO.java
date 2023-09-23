package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookLanguageDTO implements Serializable {
    private long id;
    private String code;
    private String name;
    private String slug;
    private LocalDate createdAt;
    private Long createdBy;
    private LocalDate updatedAt;
    private Long updatedBy;
}
