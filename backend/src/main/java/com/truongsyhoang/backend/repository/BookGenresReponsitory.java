package com.truongsyhoang.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.BookGenres;
import java.util.List;

@Repository
public interface BookGenresReponsitory extends JpaRepository<BookGenres, Long> {

    List<BookGenres> findByIdNotAndNameContainsIgnoreCase(Long id, String name);

    List<BookGenres> findByNameContainsIgnoreCase(String name);

    Page<BookGenres> findByNameContainsIgnoreCase(String name, Pageable pageable);
}
