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
@Table(name = "topic")
public class Topic extends AbtractEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "parent_id", nullable = false)
    private Long parentId;

    @Column(name = "metakey", nullable = false)
    private String metakey;

    @Column(name = "metadesc", nullable = false)
    private String metadesc;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;

}
