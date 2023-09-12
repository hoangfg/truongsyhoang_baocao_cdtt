package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "product_sale")
public class BookSale {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "product_id", nullable = false)
    private int productId;
    @Column(name = "price_sale", nullable = true)
    private double pricSale;
    @Column(name = "begin_sale", nullable = true)
    private LocalDate beginSale;
    @Column(name = "end_sale", nullable = true)
    private LocalDate endSale;
}
