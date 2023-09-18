package com.truongsyhoang.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomerResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(PublisherException.class)
    public final ResponseEntity<Object> handlerPublisherException(PublisherException ex, WebRequest request) {
        PublisherExceptionResponse exceptionResponse = new PublisherExceptionResponse(ex.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(FileNotFoundException.class)
    public final ResponseEntity<Object> handlerFileNotFoundException(FileNotFoundException ex, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(FileStorageException.class)
    public final ResponseEntity<Object> handlerFileStorageException(FileStorageException ex, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(AuthorException.class)
    public final ResponseEntity<Object> handlerAuthorException(AuthorException ex, WebRequest request) {
        ExceptionResponse exceptionResponse = new ExceptionResponse(ex.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
