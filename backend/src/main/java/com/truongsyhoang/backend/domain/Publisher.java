package com.truongsyhoang.backend.domain;

// import org.springframework.data.annotation.Id;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

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
    // @OneToOne
    // @JoinColumn(name = "publisher_id")
    // private Publisher publisher;
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
    @Column(name = "updated_at", nullable = true)
    private LocalDate updatedAt;
    @Column(name = "updated_by", nullable = true)
    private Long updatedBy;

}
