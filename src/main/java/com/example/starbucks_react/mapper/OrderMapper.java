package com.example.starbucks_react.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.starbucks_react.dto.StoreDto;

@Mapper
public interface OrderMapper {

    List<StoreDto> findNearestStores(@Param("lat") double lat, @Param("lng") double lng);
    void updateStatus(@Param("id") int id, @Param("status") String status);
    
}
