package com.truongsyhoang.backend.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import com.truongsyhoang.backend.domain.Author;
import com.truongsyhoang.backend.domain.BookGenres;
import com.truongsyhoang.backend.domain.BookLanguage;
import com.truongsyhoang.backend.domain.Publisher;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class BookDTO implements Serializable {
    private Long id;
    private String name;

    private String description;
    private String detail;
    private double price;

    private Long createdBy;

    private Long updatedBy;
    private Long authorId;
    private Long languageId;
    private Long publisherId;
    private Long genresId;
    private List<BookImagesDTO> images;
    private BookImagesDTO image;

    private Author author;
    private BookLanguage language;
    private Publisher publisher;
    private BookGenres genres;

}
