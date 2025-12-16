package com.example.starbucks_react.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.starbucks_react.dto.StoreDto;
import com.example.starbucks_react.service.StoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/stores")
@RequiredArgsConstructor
public class StoreController {
    
    private final StoreService storeService;

    @GetMapping
    public List<StoreDto> getAllStores() {
        return storeService.getAllStores();
    }
}
