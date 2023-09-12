package com.truongsyhoang.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class PublisherException extends RuntimeException{
    public PublisherException(String message) {
        super(message);
    }
}
