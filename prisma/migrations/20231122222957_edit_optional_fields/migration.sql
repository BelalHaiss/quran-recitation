/*
  Warnings:

  - You are about to drop the `Lesson` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `label` to the `quran_lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Lesson` DROP FOREIGN KEY `Lesson_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `student_lesson` DROP FOREIGN KEY `student_lesson_lesson_id_fkey`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `image_url` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `quran_lesson` ADD COLUMN `label` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `phone` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Lesson`;

-- CreateTable
CREATE TABLE `lesson` (
    `lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `audio_url` VARCHAR(191) NULL,
    `pdf_url` VARCHAR(191) NULL,
    `description` VARCHAR(500) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `category` ENUM('MEMORIZING', 'TAJWID', 'SIRAH', 'FIQH') NOT NULL,

    PRIMARY KEY (`lesson_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_lesson_id_fkey` FOREIGN KEY (`lesson_id`) REFERENCES `lesson`(`lesson_id`) ON DELETE SET NULL ON UPDATE CASCADE;
