package com.truongsyhoang.backend.dto;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class UploadedFileInfo {
    private String name;
    private String fileName;
    private String uri;
}
