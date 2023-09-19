package com.truongsyhoang.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Author;
import java.util.List;

@Repository
public interface AuthorReponsitory extends JpaRepository<Author, Long> {

    List<Author> findByIdNotAndNameContainsIgnoreCase(Long id, String name);

    List<Author> findByNameContainsIgnoreCase(String name);

    Page<Author> findByNameContainsIgnoreCase(String name, Pageable pageable);
}
