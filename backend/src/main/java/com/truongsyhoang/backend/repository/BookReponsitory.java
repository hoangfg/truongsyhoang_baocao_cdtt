package com.truongsyhoang.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Book;

@Repository
public interface BookReponsitory extends JpaRepository<Book, Long> {
    Page<Book> findByNameContainsIgnoreCase(String name, Pageable pageable);

    @Query("SELECT b FROM Book b LEFT JOIN FETCH b.stores s LEFT JOIN FETCH s.sale")
    List<Book> findAllWithStoreAndSale();

    List<Book> findAllBy();

    Optional<Book> findBySlug(String slug);
}
