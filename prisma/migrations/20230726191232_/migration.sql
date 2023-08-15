-- DropIndex
DROP INDEX `Business_id_key` ON `business`;

-- AlterTable
ALTER TABLE `business` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
