package com.truongsyhoang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.truongsyhoang.backend.domain.BookSale;
@Repository
public interface BookSaleReponsitory extends JpaRepository<BookSale, Long>{
    
}
