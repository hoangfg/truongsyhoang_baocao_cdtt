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
    private String metaKey;

    @Column(name = "metadesc", nullable = false, length = 1000)
    private String metaDesc;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "twitter")
    private String twitter;

    @Column(name = "youtube")
    private String youtube;

    @Column(name = "googleplus")
    private String googleplus;


}
