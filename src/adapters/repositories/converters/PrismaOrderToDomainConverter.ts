import { UniqueEntityId } from "@/core/domain/base/entities/UniqueEntityId";
import { Order } from "@/core/domain/entities/Order";
import { OrderComboItem } from "@/core/domain/entities/OrderComboItem";
import { OrderComboItemList } from "@/core/domain/entities/OrderComboItemList";
import { OrderStatusEnum } from "@/core/domain/enums/OrderStatusEnum";
import { PaymentMethodEnum } from "@/core/domain/enums/PaymentMethodEnum";
import { OrderStatus } from "@/core/domain/valueObjects/OrderStatus";
import { PaymentMethod } from "@/core/domain/valueObjects/PaymentMethod";
import { User as PrismaUser, Order as PrismaOrder } from "@prisma/client";

import { PrismaUserToDomainConverter } from "./PrismaUserToDomainConverter";

export class PrismaOrderToDomainConverter {
  static convert(
    prismaUser: PrismaOrder & { user?: PrismaUser | null },
    combos?: OrderComboItem[]
  ): Order {
    return new Order(
      {
        number: prismaUser.number ? BigInt(prismaUser.number) : undefined,
        status: new OrderStatus({
          name: prismaUser.status as OrderStatusEnum,
        }),
        userId: prismaUser.user_id
          ? new UniqueEntityId(prismaUser.user_id)
          : undefined,
        visitorName: prismaUser.visitor_name ?? undefined,
        paymentMethod: new PaymentMethod({
          name: prismaUser.payment_method as PaymentMethodEnum,
        }),
        paymentDetails: prismaUser.payment_details ?? undefined,
        totalPrice: prismaUser.total_price.toNumber(),
        createdAt: prismaUser.created_at,
        updatedAt: prismaUser.updated_at ?? undefined,
        user: prismaUser.user
          ? PrismaUserToDomainConverter.convert(prismaUser.user)
          : undefined,
        combos: new OrderComboItemList(combos),
      },
      new UniqueEntityId(prismaUser.id)
    );
  }
}
