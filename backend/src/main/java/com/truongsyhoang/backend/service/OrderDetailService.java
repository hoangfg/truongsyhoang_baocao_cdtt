package com.truongsyhoang.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.OrderDetail;
import com.truongsyhoang.backend.repository.OrderDetailReponsitory;

@Service
public class OrderDetailService {
    @Autowired
    private OrderDetailReponsitory detailRepository;

    public List<OrderDetail> getOrderDetailsByOrderId(Long orderId) {
        return detailRepository.getOrderDetailsByOrdersId(orderId);
    }
}
