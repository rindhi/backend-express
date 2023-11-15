/*
  Warnings:

  - You are about to drop the column `id_buat` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id_update` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `id_buat`,
    DROP COLUMN `id_update`;
