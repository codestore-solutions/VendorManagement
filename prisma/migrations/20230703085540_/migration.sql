/*
  Warnings:

  - You are about to drop the `store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `storecategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_vendor_id_fkey`;

-- DropTable
DROP TABLE `store`;

-- DropTable
DROP TABLE `storecategory`;

-- CreateTable
CREATE TABLE `Business` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `address_id` INTEGER NULL,
    `vendor_id` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `category_id` INTEGER NULL,

    UNIQUE INDEX `Business_vendor_id_key`(`vendor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BusinessCategory` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `BusinessCategory`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;
