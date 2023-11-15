/*
  Warnings:

  - You are about to drop the column `problemscwsId` on the `mesin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `mesin` DROP FOREIGN KEY `Mesin_problemscwsId_fkey`;

-- AlterTable
ALTER TABLE `mesin` DROP COLUMN `problemscwsId`,
    ADD COLUMN `status_mesins` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Mesin` ADD CONSTRAINT `Mesin_status_mesins_fkey` FOREIGN KEY (`status_mesins`) REFERENCES `ProblemScw`(`id_scw`) ON DELETE SET NULL ON UPDATE CASCADE;
