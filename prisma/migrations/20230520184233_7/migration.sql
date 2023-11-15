-- AlterTable
ALTER TABLE `user` ALTER COLUMN `tgl_buat` DROP DEFAULT,
    MODIFY `tgl_update` DATETIME(3) NULL;
