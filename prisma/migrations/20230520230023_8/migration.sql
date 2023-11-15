/*
  Warnings:

  - You are about to drop the column `problemscwsId` on the `employee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_problemscwsId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `problemscwsId`,
    ADD COLUMN `mesinId` INTEGER NULL,
    ADD COLUMN `problemScwId_scw` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `tgl_buat` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_mesinId_fkey` FOREIGN KEY (`mesinId`) REFERENCES `Mesin`(`id_mesin`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_problemScwId_scw_fkey` FOREIGN KEY (`problemScwId_scw`) REFERENCES `ProblemScw`(`id_scw`) ON DELETE SET NULL ON UPDATE CASCADE;
