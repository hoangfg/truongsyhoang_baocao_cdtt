package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Topic;
@Repository
public interface TopicReponsitory extends JpaRepository<Topic,Long>
{

    List<Topic> findByIdNotAndNameContainsIgnoreCase(Long id, String name);

    List<Topic> findByNameContainsIgnoreCase(String name);

    Page<Topic> findByNameContainsIgnoreCase(String name, Pageable pageable);
}
