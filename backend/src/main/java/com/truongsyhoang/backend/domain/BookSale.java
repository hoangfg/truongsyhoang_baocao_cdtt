package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties(value = { "book_store" })
public class BookSale extends AbtractEntity {
    @OneToOne
    @JoinColumn(name = "store_id", referencedColumnName = "id", unique = true, nullable = false)
    private BookStore store;

    @Column(name = "price_sale", nullable = true)
    private double priceSale;
    @Column(name = "begin_sale", nullable = true)
    private LocalDate beginSale;
    @Column(name = "end_sale", nullable = true)
    private LocalDate endSale;

    public void setPriceSale(double priceSale) {
        this.priceSale = priceSale;
    }
}
