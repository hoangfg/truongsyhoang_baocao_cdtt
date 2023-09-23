package com.truongsyhoang.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.BookLanguage;

import java.util.List;

@Repository
public interface BookLanguageReponsitory extends JpaRepository<BookLanguage, Long> {

    List<BookLanguage> findByIdNotAndNameContainsIgnoreCase(Long id, String name);

    List<BookLanguage> findByNameContainsIgnoreCase(String name);

    Page<BookLanguage> findByNameContainsIgnoreCase(String name, Pageable pageable);
}
