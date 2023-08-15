/*
  Warnings:

  - You are about to drop the column `postalCode` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `address_id` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `business` table. All the data in the column will be lost.
  - You are about to drop the column `vendor_id` on the `business` table. All the data in the column will be lost.
  - The primary key for the `businesscategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `businesscategory` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `businesscategory` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `businesscategory` table. All the data in the column will be lost.
  - You are about to drop the column `business_admin_id` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `profile_picture` on the `vendor` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `vendor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vendorId]` on the table `Business` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `street1` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street2` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountNumber` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressProof` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `areaDescription` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bankName` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beneficiaryName` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessName` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessRegCert` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfEstablishment` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generalDetail` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grossAnnualSale` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identityProof` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insured` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licensed` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorBusinessType` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorId` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `BusinessCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessAdminId` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `Business_address_id_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `Business_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `business` DROP FOREIGN KEY `Business_vendor_id_fkey`;

-- AlterTable
ALTER TABLE `address` DROP COLUMN `postalCode`,
    DROP COLUMN `street`,
    ADD COLUMN `latitude` DOUBLE NULL,
    ADD COLUMN `longitude` DOUBLE NULL,
    ADD COLUMN `street1` VARCHAR(191) NOT NULL,
    ADD COLUMN `street2` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `business` DROP COLUMN `address_id`,
    DROP COLUMN `category_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `description`,
    DROP COLUMN `name`,
    DROP COLUMN `status`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `vendor_id`,
    ADD COLUMN `accountNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressId` INTEGER NULL,
    ADD COLUMN `addressProof` VARCHAR(191) NOT NULL,
    ADD COLUMN `areaDescription` VARCHAR(191) NOT NULL,
    ADD COLUMN `bankName` VARCHAR(191) NOT NULL,
    ADD COLUMN `beneficiaryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `businessName` VARCHAR(191) NOT NULL,
    ADD COLUMN `businessRegCert` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoryId` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `currency` VARCHAR(191) NOT NULL,
    ADD COLUMN `dateOfEstablishment` DATETIME(3) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `generalDetail` VARCHAR(191) NOT NULL,
    ADD COLUMN `grossAnnualSale` INTEGER NOT NULL,
    ADD COLUMN `identityProof` VARCHAR(191) NOT NULL,
    ADD COLUMN `insured` BOOLEAN NOT NULL,
    ADD COLUMN `licensed` BOOLEAN NOT NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL,
    ADD COLUMN `vendorBusinessType` VARCHAR(191) NOT NULL,
    ADD COLUMN `vendorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `businesscategory` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `categoryId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NULL,
    ADD PRIMARY KEY (`categoryId`);

-- AlterTable
ALTER TABLE `vendor` DROP COLUMN `business_admin_id`,
    DROP COLUMN `created_at`,
    DROP COLUMN `first_name`,
    DROP COLUMN `last_name`,
    DROP COLUMN `phone_number`,
    DROP COLUMN `profile_picture`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `businessAdminId` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `firstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `profilePicture` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Business_vendorId_key` ON `Business`(`vendorId`);

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_addressId_fkey` FOREIGN KEY (`addressId`) REFERENCES `Address`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_vendorId_fkey` FOREIGN KEY (`vendorId`) REFERENCES `Vendor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `BusinessCategory`(`categoryId`) ON DELETE SET NULL ON UPDATE CASCADE;
