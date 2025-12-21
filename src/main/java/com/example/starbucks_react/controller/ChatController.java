package com.example.starbucks_react.controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.example.starbucks_react.dto.OrderStatusMessage;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessagingTemplate messagingTemplate;

    // 주문 상태 변경 시 호출
    public void sendOrderStatus(OrderStatusMessage message) {
        messagingTemplate.convertAndSend(
                "/topic/order/" + message.getOrderId(),
                message
        );
    }
    
}
