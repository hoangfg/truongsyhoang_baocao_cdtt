package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "topic_id")
    private Long topicId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "detail", nullable = false, columnDefinition = "mediumtext")
    private String detail;

    @Column(name = "image")
    private String image;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "metakey", nullable = false)
    private String metakey;

    @Column(name = "metadesc", nullable = false)
    private String metadesc;

    @Column(name = "created_by", nullable = false, columnDefinition = "int(10) unsigned default 1")
    private Long createdBy;

    @Column(name = "updated_by")
    private Long updatedBy;

    @Column(name = "status", nullable = false, columnDefinition = "tinyint(3) unsigned default 2")
    private Status status;

    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;
    @Column(name = "updated_at", nullable = false)
    private LocalDate updatedAt;

}
