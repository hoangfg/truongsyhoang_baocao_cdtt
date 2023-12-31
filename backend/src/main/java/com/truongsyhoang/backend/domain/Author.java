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
@Table(name = "author")
public class Author extends AbtractEntity {

	@Column(name = "name", nullable = false, length = 100)
	private String name;
	@Column(name = "slug", length = 255)
	private String slug;
	@Column(name = "image", length = 127)
	private String image;
	@Lob
	@Column(name = "detail", columnDefinition = "TEXT")
	private String detail;

	@Column(name = "status", columnDefinition = "int default 0")
	private int status;

}
