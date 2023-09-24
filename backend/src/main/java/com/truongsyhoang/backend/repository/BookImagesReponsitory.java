package com.truongsyhoang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.truongsyhoang.backend.domain.BookImages;
@Repository
public interface BookImagesReponsitory extends JpaRepository<BookImages, Long>{
    
}
