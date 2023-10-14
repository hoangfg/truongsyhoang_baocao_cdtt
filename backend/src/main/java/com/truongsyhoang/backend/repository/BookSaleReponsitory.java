package com.truongsyhoang.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Book;
import com.truongsyhoang.backend.domain.BookSale;
import com.truongsyhoang.backend.domain.BookStore;

@Repository
public interface BookSaleReponsitory extends JpaRepository<BookSale, Long> {
    Optional<BookSale> findByStore_Book(Book book);
}
