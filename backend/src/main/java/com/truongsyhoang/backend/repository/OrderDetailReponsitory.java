package com.truongsyhoang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import com.truongsyhoang.backend.domain.OrderDetail;

public interface OrderDetailReponsitory extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> getOrderDetailsByOrdersId(Long order_id);

    @Query("SELECT od FROM OrderDetail od JOIN FETCH od.book WHERE od.id = :id")
    OrderDetail getOrderDetailWithBook(@Param("id") Long id);
}
