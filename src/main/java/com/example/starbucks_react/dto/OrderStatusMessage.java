package com.example.starbucks_react.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderStatusMessage {

    private int orderId;
    private String status; // ORDERED, MAKING, DONE
    
}
