-- AlterTable
ALTER TABLE `storecategory` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    MODIFY `updated_at` DATETIME(3) NULL;
