package com.truongsyhoang.backend.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "book")
public class Book {
	@Id
	@Column(name = "id", nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "slug", nullable = false, length = 255)
	private String slug;
	@Column(name = "isbn", nullable = false)
	private String isbn;
	@Column(name = "description", nullable = true)
	@Lob
	private String description;
	@Column(name = "detail", nullable = true)
	@Lob
	private String detail;
	@Column(name = "price", nullable = false)
	private double price;	
	@Column(name = "author_id", nullable = false)  
	private long authorId;
	@Column(name = "language_id", nullable = false)  
	private long languageId;
	@Column(name = "publisher_id", nullable = false)  
	private long publisherId;
	@Column(name = "genre_id", nullable = false)
	private Long genreId;
	@Column(name = "status", nullable = false)
	private Status status;
	@Column(name = "created_at", nullable = false)
	private LocalDateTime createdAt;
	@Column(name = "created_by", nullable = false)
	private Long createdBy;
	@Column(name = "updated_at", nullable = false)
	private LocalDateTime updatedAt;
	@Column(name = "updated_by", nullable = false)
	private Long updatedBy;
}
