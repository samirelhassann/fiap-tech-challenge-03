import { PrismaComboProductRepository } from "./PrismaComboProductRepository";
import { PrismaComboRepository } from "./PrismaComboRepository";
import { PrismaOrderComboItemRepository } from "./PrismaOrderComboItemRepository";
import { PrismaOrderNotificationsPrismaRepository } from "./PrismaOrderNotificationsRepository";
import { PrismaOrderRepository } from "./PrismaOrderRepository";
import { PrismaProductRepository } from "./PrismaProductRepository";
import { PrismaUserRepository } from "./PrismaUserRepository";

let comboProductRepositoryInstance: PrismaComboProductRepository;
let comboRepositoryInstance: PrismaComboRepository;
let productRepositoryInstance: PrismaProductRepository;
let userRepositoryInstance: PrismaUserRepository;
let orderNotificationsRepository: PrismaOrderNotificationsPrismaRepository;
let orderRepository: PrismaOrderRepository;
let orderComboItemRepository: PrismaOrderComboItemRepository;

export function makeComboProductRepository() {
  if (!comboProductRepositoryInstance) {
    comboProductRepositoryInstance = new PrismaComboProductRepository();
  }
  return comboProductRepositoryInstance;
}

export function makeComboRepository() {
  if (!comboRepositoryInstance) {
    comboRepositoryInstance = new PrismaComboRepository(
      makeComboProductRepository()
    );
  }
  return comboRepositoryInstance;
}

export function makeProductRepository() {
  if (!productRepositoryInstance) {
    productRepositoryInstance = new PrismaProductRepository();
  }
  return productRepositoryInstance;
}

export function makeUserRepository() {
  if (!userRepositoryInstance) {
    userRepositoryInstance = new PrismaUserRepository();
  }
  return userRepositoryInstance;
}

export function makeOrderNotificationRepository() {
  if (!orderNotificationsRepository) {
    orderNotificationsRepository =
      new PrismaOrderNotificationsPrismaRepository();
  }
  return orderNotificationsRepository;
}

export function makeOrderComboItemRepository() {
  if (!orderComboItemRepository) {
    orderComboItemRepository = new PrismaOrderComboItemRepository();
  }
  return orderComboItemRepository;
}

export function makeOrderRepository() {
  if (!orderRepository) {
    orderRepository = new PrismaOrderRepository(makeOrderComboItemRepository());
  }
  return orderRepository;
}
