package com.truongsyhoang.backend.domain;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "orderdetail")
public class OrderDetail extends AbtractEntity {
    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnoreProperties("order_detail")
    private Book book;
    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonIgnoreProperties("order_detail")
    private Orders orders;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "qty", nullable = false)
    private int qty;

    @Column(name = "amount", nullable = false)
    private double amount;

}
