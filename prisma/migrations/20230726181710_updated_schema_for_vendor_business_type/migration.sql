/*
  Warnings:

  - You are about to alter the column `vendorBusinessType` on the `business` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `business` MODIFY `vendorBusinessType` INTEGER NOT NULL;
