package com.truongsyhoang.backend.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.truongsyhoang.backend.domain.Role;
import com.truongsyhoang.backend.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByNameStartsWith(String name, Pageable pageable);

    List<User> findByNameContainsIgnoreCase(String name);

    List<User> findByUsernameContainsIgnoreCase(String username);

    List<User> findByEmailContainsIgnoreCase(String email);

    List<User> findByPhoneContainsIgnoreCase(String phone);
}
