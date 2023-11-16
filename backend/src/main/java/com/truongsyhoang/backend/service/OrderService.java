package com.truongsyhoang.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.truongsyhoang.backend.domain.Orders;
import com.truongsyhoang.backend.repository.BookReponsitory;
import com.truongsyhoang.backend.repository.OrderDetailReponsitory;
import com.truongsyhoang.backend.repository.OrderReponsitory;

import jakarta.transaction.Transactional;

@Service
public class OrderService {
    @Autowired
    public OrderReponsitory ordersReponsitory;
    @Autowired
    private OrderDetailReponsitory orderDetailRepository;
    @Autowired
    private BookReponsitory bookReponsitory;

    public List<Orders> getAll() {
        return ordersReponsitory.findAll();
    }

    public Orders getById(long id) {
        Optional<Orders> optionalOrder = ordersReponsitory.findById(id);
        return optionalOrder.orElse(null);
    }

    public Orders updateOrders(Orders orders) {
        Orders exitingOrders = ordersReponsitory.findById(orders.getId()).get();
        // exitingOrders.setAddress(orders.getAddress());
        // exitingOrders.setEmail(orders.getEmail());
        // exitingOrders.setFullname(orders.getFullname());
        // exitingOrders.setNote(orders.getNote());
        // exitingOrders.setPhone_number(orders.getPhone_number());
        exitingOrders.setStatus(orders.getStatus());

        // exitingOrders.setPhoto(category.getPhoto());

        Orders updated = ordersReponsitory.save(exitingOrders);
        return updated;
    }

}
