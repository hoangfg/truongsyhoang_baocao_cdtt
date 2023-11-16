package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.truongsyhoang.backend.domain.Role;

public interface RoleReponsitory extends JpaRepository<Role, Long> {
    List<Role> findByNameContainsIgnoreCase(String name);
}
