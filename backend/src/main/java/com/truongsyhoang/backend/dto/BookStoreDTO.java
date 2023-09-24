package com.truongsyhoang.backend.dto;

import java.io.Serializable;

import com.truongsyhoang.backend.domain.Book;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookStoreDTO implements Serializable {
    private Long id;
    private int quanlity;
    private double entryPrice;
    private Long bookId;
    private Book book;
}
