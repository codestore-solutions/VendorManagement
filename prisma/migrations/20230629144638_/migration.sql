/*
  Warnings:

  - Made the column `category_id` on table `store` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_category_id_fkey`;

-- AlterTable
ALTER TABLE `store` MODIFY `category_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `StoreCategory`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
