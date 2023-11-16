package com.truongsyhoang.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.truongsyhoang.backend.domain.OrderDetail;
import com.truongsyhoang.backend.service.OrderDetailService;
@RestController
@RequestMapping("/api/orderdetail")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
public class OrderDetailController {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/{orderId}")
    public ResponseEntity<List<OrderDetail>> getOrderDetailsByOrderId(@PathVariable Long orderId) {
        List<OrderDetail> details = orderDetailService.getOrderDetailsByOrderId(orderId);
        return new ResponseEntity<>(details, HttpStatus.OK);

    }
}
