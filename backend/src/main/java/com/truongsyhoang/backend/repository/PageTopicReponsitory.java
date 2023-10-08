package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.PageTopic;

@Repository
public interface PageTopicReponsitory extends JpaRepository<PageTopic, Long> {
    List<PageTopic> findByIdNotAndTitleContainsIgnoreCase(Long id, String title);

    List<PageTopic> findByTitleContainsIgnoreCase(String title);

    Page<PageTopic> findByTitleContainsIgnoreCase(String title, Pageable pageable);
}
