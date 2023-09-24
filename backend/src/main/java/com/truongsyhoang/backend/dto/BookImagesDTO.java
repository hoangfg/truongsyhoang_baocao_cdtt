package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookImagesDTO implements Serializable {
    private Long id;
    private String name;
    private String fileName;
    private String uri;
    private String url;
    private String status;
    private String reponse = "{\"status\": \"success\"}";
}
