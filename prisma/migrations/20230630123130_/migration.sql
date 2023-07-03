/*
  Warnings:

  - The primary key for the `store` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `store_id` on the `store` table. All the data in the column will be lost.
  - You are about to drop the column `vendor_id` on the `vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Store` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_vendor_id_fkey`;

-- DropIndex
DROP INDEX `Vendor_vendor_id_key` ON `vendor`;

-- AlterTable
ALTER TABLE `store` DROP PRIMARY KEY,
    DROP COLUMN `store_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `vendor` DROP COLUMN `vendor_id`,
    ADD COLUMN `id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Vendor_id_key` ON `Vendor`(`id`);

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
