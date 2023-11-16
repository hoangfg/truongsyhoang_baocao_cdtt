package com.truongsyhoang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.truongsyhoang.backend.domain.Orders;

public interface OrderReponsitory extends JpaRepository<Orders, Long> {

}
