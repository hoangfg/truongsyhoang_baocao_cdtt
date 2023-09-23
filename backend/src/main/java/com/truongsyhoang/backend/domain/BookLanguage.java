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
@Table(name = "book_language")
public class BookLanguage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private long id;
	@Column(name = "code", nullable = false, length = 10)
	private String code;
	@Column(name = "name", nullable = false, length = 255)
	private String name;
	@Column(name = "slug", nullable = false, length = 100)
	private String slug;
	@Column(name = "created_at", nullable = false)
	private LocalDate createdAt;
	@Column(name = "created_by", nullable = false)
	private Long createdBy;
	@Column(name = "updated_at", nullable = false)
	private LocalDate updatedAt;
	@Column(name = "updated_by", nullable = false)
	private Long updatedBy;
}
