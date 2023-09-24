package com.truongsyhoang.backend.domain;


import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@MappedSuperclass
public class AbtractEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "created_at", nullable = true)
	private LocalDate createdAt;
	@Column(name = "created_by", nullable = true)
	private Long createdBy;
	@Column(name = "updated_at", nullable = true)
	private LocalDate updatedAt;
	@Column(name = "updated_by", nullable = true)
	private Long updatedBy;

    @PrePersist
    public void prePersist() {
        createdAt = LocalDate.now();
    }
    @PreUpdate
    public void preUpdate() {
        updatedAt =  LocalDate.now();
    }
}
