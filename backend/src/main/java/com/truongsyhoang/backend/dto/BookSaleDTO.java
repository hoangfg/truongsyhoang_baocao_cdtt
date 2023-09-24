package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.truongsyhoang.backend.domain.Book;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookSaleDTO implements Serializable {
    private Long id;
    private double priceSale;
    private LocalDate beginSale;
    private LocalDate endSale;
    private Long bookId;

    private Book book;
}
