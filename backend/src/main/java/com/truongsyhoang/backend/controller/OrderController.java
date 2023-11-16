package com.truongsyhoang.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.Orders;
import com.truongsyhoang.backend.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class OrderController {
    @Autowired
    private OrderService ordersService;

    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrderss() {
        List<Orders> orders = ordersService.getAll();

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Orders> getOrdersById(@PathVariable("id") Long OrdersId) {
        Orders orders = ordersService.getById(OrdersId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Orders> updateOrders(@PathVariable("id") Long orderId,
            @RequestBody Orders order) {
        order.setId(orderId);
        Orders updatedOrders = ordersService.updateOrders(order);
        return new ResponseEntity<>(updatedOrders, HttpStatus.OK);

    }

    // @PostMapping
    // public ResponseEntity<?> createCategory(@RequestBody Orders orders) {
    // Orders save = ordersService.createOrder(orders);
    // return new ResponseEntity<>(save, HttpStatus.ACCEPTED);
    // }

    @PutMapping("/{id}/updateStatus/{newStatus}")
    public ResponseEntity<Orders> updateStatus(@PathVariable("id") Long orderId,
            @PathVariable("newStatus") int newStatus) {
        Orders orders = ordersService.getById(orderId);
        orders.setStatus(newStatus);
        Orders updatedOrders = ordersService.updateOrders(orders);
        return new ResponseEntity<>(updatedOrders, HttpStatus.OK);
    }
}
