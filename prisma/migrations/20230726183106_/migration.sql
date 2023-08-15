/*
  Warnings:

  - You are about to drop the column `email` on the `vendor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Vendor_email_key` ON `vendor`;

-- AlterTable
ALTER TABLE `vendor` DROP COLUMN `email`;
