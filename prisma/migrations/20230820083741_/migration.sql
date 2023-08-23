-- DropIndex
DROP INDEX `User_id_key` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
