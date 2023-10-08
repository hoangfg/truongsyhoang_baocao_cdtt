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

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "config")
public class Config extends AbtractEntity {

    @Column(name = "site_name", nullable = false)
    private String siteName;

    @Column(name = "metakey", nullable = false, length = 1000)
    private String metakey;

    @Column(name = "metadesc", nullable = false, length = 1000)
    private String metadesc;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "facebook", nullable = true)
    private String facebook;

    @Column(name = "twitter", nullable = true)
    private String twitter;

    @Column(name = "youtube", nullable = true)
    private String youtube;

    @Column(name = "googleplus", nullable = true)
    private String googleplus;

    @Column(name = "image", length = 127)
    private String image;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;
}
