/*
  Warnings:

  - A unique constraint covering the columns `[vendor_id]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Store_vendor_id_key` ON `Store`(`vendor_id`);
