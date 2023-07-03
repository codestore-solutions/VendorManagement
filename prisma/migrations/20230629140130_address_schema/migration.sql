/*
  Warnings:

  - You are about to drop the column `user_id` on the `vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address_id]` on the table `Store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vendor_id]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `vendor` DROP COLUMN `user_id`,
    MODIFY `vendor_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `landmark` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Store_address_id_key` ON `Store`(`address_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Vendor_vendor_id_key` ON `Vendor`(`vendor_id`);

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
