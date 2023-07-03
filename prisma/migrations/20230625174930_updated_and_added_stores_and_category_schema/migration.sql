/*
  Warnings:

  - The primary key for the `vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `vendor` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `vendor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `first_name` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_picture` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendor_id` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vendor` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    ADD COLUMN `first_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `last_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_picture` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD COLUMN `vendor_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL,
    ADD PRIMARY KEY (`vendor_id`);

-- CreateTable
CREATE TABLE `Store` (
    `store_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `address_id` INTEGER NOT NULL,
    `business_admin_id` INTEGER NOT NULL,
    `vendor_id` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoreCategory` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `StoreCategory`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
