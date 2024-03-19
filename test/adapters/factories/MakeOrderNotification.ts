/* eslint-disable default-param-last */

import { UniqueEntityId } from "@/core/domain/base/entities/UniqueEntityId";
import {
  OrderNotification,
  OrderNotificationProps,
} from "@/core/domain/entities/OrderNotification";
import { NotificationStatusEnum } from "@/core/domain/enums/NotificationStatusEnum";
import { NotificationStatus } from "@/core/domain/valueObjects/NotificationStatus";
import { faker } from "@faker-js/faker";

import { makeOrder } from "./MakeOrder";
import { makeUser } from "./MakeUser";

export function makeOrderNotification(
  override: Partial<OrderNotificationProps> = {},
  id?: UniqueEntityId
): OrderNotification {
  const order = makeOrder();
  const user = makeUser();

  const orderNotification = new OrderNotification(
    {
      message: faker.lorem.word(),
      status: new NotificationStatus({ name: NotificationStatusEnum.PENDING }),
      orderId: new UniqueEntityId(order.id.toString()),
      userId: new UniqueEntityId(user.id.toString()),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      ...override,
    },
    id
  );

  return orderNotification;
}
