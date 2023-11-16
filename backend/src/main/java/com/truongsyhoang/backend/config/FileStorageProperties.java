package com.truongsyhoang.backend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {
    private String uploadConfigImageDir = "/src/main/resources/static/uploads/config";
    private String uploadAuthorImageDir = "/src/main/resources/static/backend/uploads/author";
    private String uploadBookImageDir = "/src/main/resources/static/uploads/book";
    private String uploadPostImageDir = "/src/main/resources/static/uploads/post";
    private String uploadSliderImageDir = "/src/main/resources/static/uploads/slider";
    private String uploadUserImageDir = "/src/main/resources/static/uploads/user";

}
