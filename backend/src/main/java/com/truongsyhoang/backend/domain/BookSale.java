package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Table(name = "book_sale")
public class BookSale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @OneToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id", unique = true, nullable = false)
    private Book bookId;
    @Column(name = "price_sale", nullable = true)
    private double priceSale;
    @Column(name = "begin_sale", nullable = true)
    private LocalDate beginSale;
    @Column(name = "end_sale", nullable = true)
    private LocalDate endSale;

    // public void setBookId(Book book) {
    // this.bookId = book;
    // }

    // public void setBeginSale(LocalDate beginSale) {
    // this.beginSale = beginSale;
    // }

    // public void setEndSale(LocalDate endSale) {
    // this.endSale = endSale;
    // }

    public void setPriceSale(double priceSale) {
        this.priceSale = priceSale;
    }
}
