package com.truongsyhoang.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Book;
@Repository
public interface BookReponsitory extends JpaRepository<Book, Long>{
    Page<Book> findByNameContainsIgnoreCase(String name, Pageable pageable);
}
