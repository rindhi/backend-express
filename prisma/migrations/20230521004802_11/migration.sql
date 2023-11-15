-- AlterTable
ALTER TABLE `historykerusakan` MODIFY `end_time` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `tgl_buat` DROP DEFAULT;
