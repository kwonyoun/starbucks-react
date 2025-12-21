import { useEffect } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const useOrderSocket = (orderId, onMessage) => {
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(socket);

    stomp.connect({}, () => {
      stomp.subscribe(`/topic/order/${orderId}`, msg => {
        onMessage(JSON.parse(msg.body));
      });
    });

    return () => stomp.disconnect();
  }, [orderId]);
};
