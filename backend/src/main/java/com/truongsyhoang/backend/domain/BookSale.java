package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "book_sale")
public class BookSale extends AbtractEntity {
    @OneToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book bookId;
    @Column(name = "price_sale", nullable = true)
    private double pricSale;
    @Column(name = "begin_sale", nullable = true)
    private LocalDate beginSale;
    @Column(name = "end_sale", nullable = true)
    private LocalDate endSale;
}
