package com.truongsyhoang.backend.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
@Table(name = "genres")
public class BookGenres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Column(name = "slug", nullable = false, length = 255)
    private String slug;
    // @Column(name = "parent_id", nullable = false)
    // private long parentId;
    @Lob
    @Column(name = "detail", nullable = true)
    private String detail;

    @Column(name = "status", columnDefinition = "int default 0")
    private int status;
    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;
    @Column(name = "created_by", nullable = false)
    private Long createdBy;
    @Column(name = "updated_at", nullable = true)
    private LocalDate updatedAt;
    @Column(name = "updated_by", nullable = true)
    private Long updatedBy;

}
