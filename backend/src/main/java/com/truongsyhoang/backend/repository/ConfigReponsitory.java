package com.truongsyhoang.backend.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.truongsyhoang.backend.domain.Config;
import java.util.List;

@Repository
public interface ConfigReponsitory extends JpaRepository<Config, Long> {

    List<Config> findByIdNotAndSiteNameContainsIgnoreCase(Long id, String siteName);

    List<Config> findBySiteNameContainsIgnoreCase(String siteName);

    Page<Config> findBySiteNameContainsIgnoreCase(String siteName, Pageable pageable);
}
