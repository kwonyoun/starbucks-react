package com.example.starbucks_react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.starbucks_react.dto.StoreDto;

@Mapper
public interface StoreMapper {

    List<StoreDto> getAllStores();
}

