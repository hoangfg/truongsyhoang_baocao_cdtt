package com.truongsyhoang.backend.domain;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
@Table(name = "book")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Book extends AbtractEntity {

	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "slug", nullable = false, length = 255)
	private String slug;
	@Column(name = "isbn", nullable = false)
	private String isbn;
	@Column(name = "description", nullable = true, columnDefinition = "TEXT")
	@Lob
	private String description;
	@Column(name = "detail", nullable = true, columnDefinition = "TEXT")
	@Lob
	private String detail;
	@Column(name = "price", nullable = false)
	private double price;

	@ManyToOne
	@JoinColumn(name = "author_id")
	private Author author;
	@ManyToOne
	@JoinColumn(name = "language_id")
	private BookLanguage language;
	@ManyToOne
	@JoinColumn(name = "publisher_id")
	private Publisher publisher;

	@ManyToOne
	@JoinColumn(name = "genre_id")
	private BookGenres genres;

	@ManyToMany
	@JoinTable(name = "book_book_images", joinColumns = @JoinColumn(name = "book_id"), inverseJoinColumns = @JoinColumn(name = "book_images_id"))
	private Set<BookImages> images = new LinkedHashSet<>();
	@JsonIgnore
	@OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<BookStore> stores = new HashSet<>();

	@OneToOne(orphanRemoval = true)
	@JoinColumn(name = "book_image_id")
	private BookImages image;

	@Column(name = "status", columnDefinition = "int default 0")
	private int status;

	@PrePersist
	@Override
	public void prePersist() {
		super.prePersist();
		if (description == null)
			description = "Thông tin sản phẩm";
		if (detail == null)
			detail = "Chi tiết sản phẩm";

	}

	@PreUpdate
	@Override
	public void preUpdate() {
		super.preUpdate();
		if (description == null)
			description = "Thông tin sản phẩm";
		if (detail == null)
			detail = "Chi tiết sản phẩm";
	}

}
