package com.truongsyhoang.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.BookStore;

@Repository
public interface BookStoreReponsitory extends JpaRepository<BookStore, Long> {
    Optional<BookStore> findByBookId_Id(Long bookId);
}
