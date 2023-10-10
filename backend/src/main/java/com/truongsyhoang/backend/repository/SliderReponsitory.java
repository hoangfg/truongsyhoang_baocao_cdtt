package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Slider;

@Repository
public interface SliderReponsitory extends JpaRepository<Slider, Long> {
    List<Slider> findByIdNotAndNameContainsIgnoreCase(Long id, String name);

    List<Slider> findByNameContainsIgnoreCase(String name);

    Page<Slider> findByNameContainsIgnoreCase(String name, Pageable pageable);

    @Query("SELECT MAX(s.sortOrder) FROM Slider s")
    Integer findMaxSortOrder();
}
