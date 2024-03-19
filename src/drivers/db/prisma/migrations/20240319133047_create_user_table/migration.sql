/*
  Warnings:

  - You are about to drop the column `client_id` on the `order_notifications` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `orders` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `order_notifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_notifications" DROP CONSTRAINT "order_notifications_client_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_client_id_fkey";

-- AlterTable
ALTER TABLE "order_notifications" DROP COLUMN "client_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "client_id",
ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_notifications" ADD CONSTRAINT "order_notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
