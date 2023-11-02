/*
  Warnings:

  - You are about to drop the column `mainArt` on the `Bujinkan` table. All the data in the column will be lost.
  - You are about to drop the column `bujinkanId` on the `Padowan` table. All the data in the column will be lost.
  - You are about to drop the column `senseiId` on the `Padowan` table. All the data in the column will be lost.
  - You are about to drop the column `bujinkanId` on the `Sensei` table. All the data in the column will be lost.
  - You are about to drop the column `favoriteWeapon` on the `Sensei` table. All the data in the column will be lost.
  - You are about to drop the column `mainArt` on the `Sensei` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('Diversion', 'Escape', 'HandFight', 'Hiding', 'InfoGathering', 'Masking', 'Assasination');

-- DropForeignKey
ALTER TABLE "Padowan" DROP CONSTRAINT "Padowan_bujinkanId_fkey";

-- DropForeignKey
ALTER TABLE "Padowan" DROP CONSTRAINT "Padowan_senseiId_fkey";

-- DropForeignKey
ALTER TABLE "Sensei" DROP CONSTRAINT "Sensei_bujinkanId_fkey";

-- AlterTable
ALTER TABLE "Bujinkan" DROP COLUMN "mainArt";

-- AlterTable
ALTER TABLE "Padowan" DROP COLUMN "bujinkanId",
DROP COLUMN "senseiId";

-- AlterTable
ALTER TABLE "Sensei" DROP COLUMN "bujinkanId",
DROP COLUMN "favoriteWeapon",
DROP COLUMN "mainArt";

-- DropEnum
DROP TYPE "MartialArt";

-- DropEnum
DROP TYPE "Weapon";

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "bujinkanId" INTEGER NOT NULL,
    "lessonTime" TIMESTAMP(3) NOT NULL,
    "subject" "Subject" NOT NULL,
    "senseiId" INTEGER NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PadowanToLesson" (
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lessonId" INTEGER NOT NULL,
    "padowanId" INTEGER NOT NULL,

    CONSTRAINT "PadowanToLesson_pkey" PRIMARY KEY ("padowanId","lessonId")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_bujinkanId_fkey" FOREIGN KEY ("bujinkanId") REFERENCES "Bujinkan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_senseiId_fkey" FOREIGN KEY ("senseiId") REFERENCES "Sensei"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PadowanToLesson" ADD CONSTRAINT "PadowanToLesson_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PadowanToLesson" ADD CONSTRAINT "PadowanToLesson_padowanId_fkey" FOREIGN KEY ("padowanId") REFERENCES "Padowan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
