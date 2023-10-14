package com.truongsyhoang.backend.dto;

import java.time.LocalDate;

import com.truongsyhoang.backend.domain.Book;
import com.truongsyhoang.backend.domain.BookSale;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookStoreBriefDTO {
    private Long id;
    private String typeName;
    private int quanlity;
    private double entryPrice;
    // private Long bookId;
    private double priceSale;
    private LocalDate beginSale;
    private LocalDate endSale;
    // private Book book;
    private String bookName;
}
