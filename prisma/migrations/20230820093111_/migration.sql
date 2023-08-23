/*
  Warnings:

  - You are about to drop the column `mobileNumber` on the `business` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `business` DROP COLUMN `mobileNumber`,
    ADD COLUMN `phoneNumber` VARCHAR(191) NULL;
