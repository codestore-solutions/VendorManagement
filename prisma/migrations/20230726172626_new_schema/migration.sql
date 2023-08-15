/*
  Warnings:

  - You are about to drop the column `categoryId` on the `business` table. All the data in the column will be lost.
  - Added the required column `formStep` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `Business_categoryId_fkey`;

-- AlterTable
ALTER TABLE `business` DROP COLUMN `categoryId`,
    ADD COLUMN `formStep` INTEGER NOT NULL;
