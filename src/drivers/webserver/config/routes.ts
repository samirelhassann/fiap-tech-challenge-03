import { FastifyInstance } from "fastify";

import identifyRequest from "@/adapters/middlewares/identifyRequest";

import { AuthRoutes } from "../routes/AuthRoutes";
import { ComboRoutes } from "../routes/ComboRoutes";
import { HealhCheckRoutes } from "../routes/HealhCheckRoutes";
import { OrderNotificationRoutes } from "../routes/OrderNotificationRoutes";
import { OrderRoutes } from "../routes/OrderRoutes";
import { ProductRoutes } from "../routes/ProductRoutes";
import { UserRoutes } from "../routes/UserRoutes";

export function routes(app: FastifyInstance) {
  app.addHook("preHandler", identifyRequest);

  app.register(HealhCheckRoutes);

  app.register(AuthRoutes);
  app.register(UserRoutes, { prefix: "/users" });
  app.register(ComboRoutes, { prefix: "/combos" });
  app.register(ProductRoutes, { prefix: "/products" });
  app.register(OrderRoutes, { prefix: "/orders" });
  app.register(OrderNotificationRoutes, { prefix: "/order-notifications" });
}
