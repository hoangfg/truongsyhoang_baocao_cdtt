package com.truongsyhoang.backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PreUpdate;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "page")
public class PageTopic extends AbtractEntity {
     @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Lob
    @Column(name = "detail", nullable = true, columnDefinition = "TEXT")
    private String detail;

    @Column(name = "image")
    private String image;

    @Column(name = "metakey", nullable = false)
    private String metakey;

    @Column(name = "metadesc")
    private String metadesc;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;

}
