package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "slider")
public class Slider extends AbtractEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "link", nullable = false)
    private String link;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "sort_order", nullable = false, columnDefinition = "int default 0")
    private Integer sortOrder;

    @Column(name = "position", nullable = false)
    private String position;


    @Column(name = "status", columnDefinition = "int default 0")
    private int status;


}
