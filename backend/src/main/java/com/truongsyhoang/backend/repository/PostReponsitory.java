package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Post;

@Repository
public interface PostReponsitory extends JpaRepository<Post, Long> {
     List<Post> findByIdNotAndTitleContainsIgnoreCase(Long id, String title);

    List<Post> findByTitleContainsIgnoreCase(String title);

    Page<Post> findByTitleContainsIgnoreCase(String title, Pageable pageable);
}
