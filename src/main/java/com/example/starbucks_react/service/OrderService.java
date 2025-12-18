package com.example.starbucks_react.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.starbucks_react.dto.StoreDto;
import com.example.starbucks_react.mapper.OrderMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderMapper orderMapper;

    public List<StoreDto> getNearestStores(double lat, double lng) {
        return orderMapper.findNearestStores(lat, lng);
    }
    
}
