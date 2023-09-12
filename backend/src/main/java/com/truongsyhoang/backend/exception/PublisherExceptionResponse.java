package com.truongsyhoang.backend.exception;

import lombok.Data;

@Data
public class PublisherExceptionResponse {
    private String message;
    public PublisherExceptionResponse(String message) {
        this.message = message;
    } 
}
