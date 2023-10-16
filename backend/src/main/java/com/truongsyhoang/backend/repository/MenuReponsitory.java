package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.truongsyhoang.backend.domain.Menu;
import com.truongsyhoang.backend.domain.Post;

public interface MenuReponsitory extends JpaRepository<Menu, Long> {
    List<Menu> findByNameContainsIgnoreCase(String name);

    List<Menu> findByNameAndPositionIgnoringCase(String name, String position);

    @Query("SELECT MAX(s.sort_order) FROM Menu s")
    Long findMaxSortOrder();
}
