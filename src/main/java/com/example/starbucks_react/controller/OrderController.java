package com.example.starbucks_react.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.starbucks_react.dto.StoreDto;
import com.example.starbucks_react.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/stores")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final  OrderService orderService;

    @GetMapping("/near")
    public List<StoreDto> getNearestStores(
        @RequestParam double lat,
        @RequestParam double lng
    ) {
        return orderService.getNearestStores(lat, lng);
    }
    
}
