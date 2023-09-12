package com.truongsyhoang.backend.domain;

// import org.springframework.data.annotation.Id;
import jakarta.persistence.Id;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Getter
@Setter
@Entity
@Table(name = "publisher")
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;
    @Column(name = "parent_id", nullable = false)
    private long parentId;
    @Column(name = "name", nullable = false, length = 100)
    private String name;
    @Column(name = "slug", nullable = false, length = 100)
    private String slug;
    @Enumerated
    @Column(name = "status", nullable = false)
    private Status status;
    @Column(name = "created_at", nullable = false)
    private LocalDate createdAt;
    @Column(name = "created_by", nullable = false)
    private Long createdBy;
    @Column(name = "updated_at", nullable = false)
    private LocalDate updatedAt;
    @Column(name = "updated_by", nullable = false)
    private Long updatedBy;

    
}
