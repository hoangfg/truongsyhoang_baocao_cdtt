package com.truongsyhoang.backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "book_store")
public class BookStore extends AbtractEntity {
    @OneToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book bookId;
    @Column(name = "quanlity", nullable = false, columnDefinition = "int default 0")
    private int quanlity;
    @Column(name = "entry_price", nullable = false, columnDefinition = "double default 0")
    private double entryPrice;
}
