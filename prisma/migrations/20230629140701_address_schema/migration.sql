/*
  Warnings:

  - The primary key for the `vendor` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `vendor` DROP PRIMARY KEY;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_vendor_id_fkey` FOREIGN KEY (`vendor_id`) REFERENCES `Vendor`(`vendor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
