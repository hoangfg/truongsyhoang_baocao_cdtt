package com.truongsyhoang.backend.dto;

import java.io.Serializable;
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
public class BookBriefDTO implements Serializable {
    private Long id;
    private String name;
    private String slug;
    private String isbn;
    private double price;
    private String authorName;
    private String languageName;
    private String publisherName;
    private String bookGenresName;
    private String imageFileName;
}
