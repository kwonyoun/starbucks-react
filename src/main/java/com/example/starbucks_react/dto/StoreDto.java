package com.example.starbucks_react.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoreDto {

    private int id;
    private String storeName;
    private float x;        // 경도
    private float y;        // 위도
    private String storeType;
    private String storeAddr;

    // 🔥 DB에는 없지만 조회 결과로만 쓰는 필드
    private double distance;
}
