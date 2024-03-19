import { OrderNotification } from "@/core/domain/entities/OrderNotification";

export interface CreateOrderNotificationUseCaseRequestDTO {
  userId: string;
  orderId: string;
  message: string;
}

export interface CreateOrderNotificationUseCaseResponseDTO {
  orderNotification: OrderNotification;
}
