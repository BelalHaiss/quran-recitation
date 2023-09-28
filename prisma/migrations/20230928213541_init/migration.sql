-- CreateTable
CREATE TABLE `manager` (
    `manger_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MODERATOR') NOT NULL DEFAULT 'ADMIN',
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `manager_username_key`(`username`),
    UNIQUE INDEX `manager_email_key`(`email`),
    PRIMARY KEY (`manger_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `student_username_key`(`username`),
    UNIQUE INDEX `student_email_key`(`email`),
    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `she5` (
    `she5_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `she5_username_key`(`username`),
    UNIQUE INDEX `she5_email_key`(`email`),
    PRIMARY KEY (`she5_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth_provider` (
    `provider_key` VARCHAR(191) NOT NULL,
    `provider_type` ENUM('FB', 'GOOGLE') NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `auth_provider_user_id_key`(`user_id`),
    PRIMARY KEY (`provider_key`, `provider_type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER NOT NULL,
    `parent_category` ENUM('QURAN', 'HADITH') NOT NULL,
    `category_type` ENUM('MEMORIZING') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quran_lesson` (
    `lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NOT NULL,
    `surah_id` TINYINT UNSIGNED NOT NULL,
    `ayah_from` SMALLINT NOT NULL,
    `ayah_to` SMALLINT NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `audio_url` VARCHAR(191) NOT NULL,
    `pdf_url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`lesson_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_lesson` (
    `student_lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `quran_lesson_id` INTEGER NOT NULL,
    `she5_id` INTEGER NOT NULL,
    `student_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`student_lesson_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `message_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sutdent_lesson_id` INTEGER NOT NULL,
    `she5_id` INTEGER NOT NULL,
    `student_id` INTEGER NOT NULL,
    `msg` VARCHAR(500) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `isDeleted` BOOLEAN NOT NULL,
    `sender_type` ENUM('SHE5', 'STUDENT') NOT NULL,

    PRIMARY KEY (`message_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assets_message` (
    `asset_id` INTEGER NOT NULL AUTO_INCREMENT,
    `message_id` INTEGER NOT NULL,
    `asset_url` VARCHAR(191) NOT NULL,
    `asset_type` ENUM('VOICE') NOT NULL DEFAULT 'VOICE',

    PRIMARY KEY (`asset_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `auth_provider` ADD CONSTRAINT `auth_provider_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quran_lesson` ADD CONSTRAINT `quran_lesson_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_quran_lesson_id_fkey` FOREIGN KEY (`quran_lesson_id`) REFERENCES `quran_lesson`(`lesson_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_she5_id_fkey` FOREIGN KEY (`she5_id`) REFERENCES `she5`(`she5_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_sutdent_lesson_id_fkey` FOREIGN KEY (`sutdent_lesson_id`) REFERENCES `student_lesson`(`student_lesson_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_she5_id_fkey` FOREIGN KEY (`she5_id`) REFERENCES `she5`(`she5_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assets_message` ADD CONSTRAINT `assets_message_message_id_fkey` FOREIGN KEY (`message_id`) REFERENCES `message`(`message_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
