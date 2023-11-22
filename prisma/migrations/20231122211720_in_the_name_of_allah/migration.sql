-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `birthday` DATE NOT NULL,
    `user_type` ENUM('ADMIN', 'SHE5', 'STUDENT') NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manager` (
    `manager_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `role` ENUM('ADMIN', 'MODERATOR') NOT NULL DEFAULT 'ADMIN',

    UNIQUE INDEX `manager_user_id_key`(`user_id`),
    PRIMARY KEY (`manager_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `student_user_id_key`(`user_id`),
    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `she5` (
    `she5_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `she5_user_id_key`(`user_id`),
    PRIMARY KEY (`she5_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `auth_provider` (
    `provider_key` VARCHAR(191) NOT NULL,
    `provider_type` ENUM('FACEBOOK', 'GOOGLE', 'APPLE') NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `auth_provider_user_id_key`(`user_id`),
    PRIMARY KEY (`provider_key`, `provider_type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_category` ENUM('QURAN', 'HADITH') NOT NULL,
    `category_type` ENUM('MEMORIZING', 'TAJWID', 'SIRAH', 'FIQH') NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson` (
    `lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `audio_url` VARCHAR(191) NOT NULL,
    `pdf_url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`lesson_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quran_lesson` (
    `lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `surah_id` TINYINT UNSIGNED NOT NULL,
    `juz_id` TINYINT UNSIGNED NOT NULL,
    `ayah_from` SMALLINT UNSIGNED NOT NULL,
    `ayah_to` SMALLINT UNSIGNED NOT NULL,
    `video_url` VARCHAR(191) NOT NULL,
    `audio_url` VARCHAR(191) NOT NULL,
    `pdf_url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(500) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`lesson_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student_lesson` (
    `student_lesson_id` INTEGER NOT NULL AUTO_INCREMENT,
    `she5_id` INTEGER NOT NULL,
    `student_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endAt` DATETIME(3) NULL,
    `lesson_type` ENUM('MEMORIZING', 'TAJWID', 'SIRAH', 'FIQH') NOT NULL,
    `quran_lesson_id` INTEGER NULL,
    `lesson_id` INTEGER NULL,

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
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
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
ALTER TABLE `manager` ADD CONSTRAINT `manager_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `student_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `she5` ADD CONSTRAINT `she5_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `auth_provider` ADD CONSTRAINT `auth_provider_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_she5_id_fkey` FOREIGN KEY (`she5_id`) REFERENCES `she5`(`she5_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_quran_lesson_id_fkey` FOREIGN KEY (`quran_lesson_id`) REFERENCES `quran_lesson`(`lesson_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_lesson` ADD CONSTRAINT `student_lesson_lesson_id_fkey` FOREIGN KEY (`lesson_id`) REFERENCES `Lesson`(`lesson_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_sutdent_lesson_id_fkey` FOREIGN KEY (`sutdent_lesson_id`) REFERENCES `student_lesson`(`student_lesson_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_she5_id_fkey` FOREIGN KEY (`she5_id`) REFERENCES `she5`(`she5_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assets_message` ADD CONSTRAINT `assets_message_message_id_fkey` FOREIGN KEY (`message_id`) REFERENCES `message`(`message_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
