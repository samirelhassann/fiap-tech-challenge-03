/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearDatabase() {
  await prisma.orderNotification.deleteMany();
  await prisma.orderComboItem.deleteMany();
  await prisma.orderProductItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.comboProduct.deleteMany();
  await prisma.product.deleteMany();
  await prisma.combo.deleteMany();
}

async function seedDatabase() {
  await prisma.product.createMany({
    data: [
      {
        name: "Burger",
        description: "Delicious beef burger with lettuce and tomato",
        price: 0.1,
        category: "SANDWICH",
      },
      {
        name: "Veggie Burger",
        description:
          "Plant-based burger with lettuce, tomato, and special sauce",
        price: 0.1,
        category: "SANDWICH",
      },
      {
        name: "Bacon Burger",
        description: "Juicy beef burger topped with crispy bacon strips",
        price: 0.1,
        category: "SANDWICH",
      },
      {
        name: "Salad Burger",
        description:
          "Light beef burger with lettuce, tomato, cucumber, and a tangy sauce",
        price: 10.1,
        category: "SANDWICH",
      },
      {
        name: "Cheddar Burger",
        description:
          "Delicious beef burger with a generous slice of melted cheddar cheese",
        price: 10.1,
        category: "SANDWICH",
      },
      {
        name: "Fries",
        description: "Crispy golden potato fries",
        price: 0.1,
        category: "SIDE_DISH",
      },
      {
        name: "Rustic Potato with Cheddar and Bacon",
        description:
          "Crispy rustic potato slices topped with melted cheddar cheese and crispy bacon bits",
        price: 0.1,
        category: "SIDE_DISH",
      },
      {
        name: "Nuggets",
        description: "Crispy chicken nuggets served with a tangy dipping sauce",
        price: 0.1,
        category: "SIDE_DISH",
      },
      {
        name: "Water",
        description: "Refreshing natural mineral water",
        price: 0.1,
        category: "DRINK",
      },
      {
        name: "Coke",
        description: "Delicious coke",
        price: 0.1,
        category: "DRINK",
      },
      {
        name: "Soda",
        description: "Refreshing carbonated drink",
        price: 0.1,
        category: "DRINK",
      },
      {
        name: "Orange Juice",
        description: "Freshly squeezed orange juice",
        price: 0.1,
        category: "DRINK",
      },
      {
        name: "Grape Juice",
        description: "Sweet and tangy grape juice",
        price: 0.1,
        category: "DRINK",
      },
    ],
  });
}

async function main() {
  await clearDatabase();
  await seedDatabase();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
