package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private long userId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone", nullable = false, length = 12)
    private String phone;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "code", nullable = true)
    private String code;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;
    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;
    @Column(name = "created_by", nullable = false)
    private Long createdBy;
    @Column(name = "updated_at", nullable = false)
    private LocalDate updatedAt;
    @Column(name = "updated_by", nullable = false)
    private Long updatedBy;
}
