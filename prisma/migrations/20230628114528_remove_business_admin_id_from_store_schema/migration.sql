/*
  Warnings:

  - You are about to drop the column `business_admin_id` on the `store` table. All the data in the column will be lost.
  - Added the required column `business_admin_id` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `store` DROP COLUMN `business_admin_id`;

-- AlterTable
ALTER TABLE `vendor` ADD COLUMN `business_admin_id` INTEGER NOT NULL;
