/*
  Warnings:

  - You are about to drop the column `status_mesin` on the `mesin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `mesin` DROP COLUMN `status_mesin`,
    ADD COLUMN `problemscwsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Mesin` ADD CONSTRAINT `Mesin_problemscwsId_fkey` FOREIGN KEY (`problemscwsId`) REFERENCES `ProblemScw`(`id_scw`) ON DELETE SET NULL ON UPDATE CASCADE;
