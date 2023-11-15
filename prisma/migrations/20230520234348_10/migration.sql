/*
  Warnings:

  - You are about to drop the column `mesinId` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `abnormality` on the `historykerusakan` table. All the data in the column will be lost.
  - You are about to drop the column `pic_related` on the `historykerusakan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_mesinId_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `mesinId`;

-- AlterTable
ALTER TABLE `historykerusakan` DROP COLUMN `abnormality`,
    DROP COLUMN `pic_related`,
    ADD COLUMN `picId` INTEGER NULL;

-- AlterTable
ALTER TABLE `mesin` ADD COLUMN `employeeId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `tgl_buat` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `HistoryKerusakan` ADD CONSTRAINT `HistoryKerusakan_picId_fkey` FOREIGN KEY (`picId`) REFERENCES `Employee`(`id_employee`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mesin` ADD CONSTRAINT `Mesin_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id_employee`) ON DELETE SET NULL ON UPDATE CASCADE;
