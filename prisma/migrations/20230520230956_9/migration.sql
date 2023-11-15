/*
  Warnings:

  - You are about to drop the column `problemScwId_scw` on the `employee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_problemScwId_scw_fkey`;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `problemScwId_scw`;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `tgl_buat` DROP DEFAULT;
