/*
  Warnings:

  - You are about to drop the column `street1` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `street2` on the `address` table. All the data in the column will be lost.
  - Added the required column `street` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` DROP COLUMN `street1`,
    DROP COLUMN `street2`,
    ADD COLUMN `street` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `business` ADD COLUMN `countryCode` INTEGER NULL;
