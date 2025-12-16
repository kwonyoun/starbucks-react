package com.example.starbucks_react.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.starbucks_react.dto.StoreDto;
import com.example.starbucks_react.mapper.StoreMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
    
    private final StoreMapper storeMapper;

    public List<StoreDto> getAllStores() {
        return storeMapper.getAllStores();
    }
}
