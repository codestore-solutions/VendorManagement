-- DropForeignKey
ALTER TABLE `store` DROP FOREIGN KEY `Store_category_id_fkey`;

-- AlterTable
ALTER TABLE `store` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `address_id` INTEGER NULL,
    MODIFY `category_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `StoreCategory`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;
