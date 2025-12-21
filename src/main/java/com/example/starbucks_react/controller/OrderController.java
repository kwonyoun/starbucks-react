package com.example.starbucks_react.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.starbucks_react.dto.OrderStatusMessage;
import com.example.starbucks_react.dto.StoreDto;
import com.example.starbucks_react.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final  OrderService orderService;
    private final ChatController chatController;

    // @GetMapping("/near")
    // public List<StoreDto> getNearestStores(
    //     @RequestParam double lat,
    //     @RequestParam double lng
    // ) {
    //     return orderService.getNearestStores(lat, lng);
    // }

    @PostMapping("/{id}/status")
    public void updateStatus(@PathVariable int id,
                            @RequestParam String status) {

        orderService.updateStatus(id, status);

        OrderStatusMessage msg = new OrderStatusMessage();
        msg.setOrderId(id);
        msg.setStatus(status);

        chatController.sendOrderStatus(msg);
    }

    
}
