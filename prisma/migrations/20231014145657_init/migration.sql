-- CreateEnum
CREATE TYPE "MartialArt" AS ENUM ('Taijutsu', 'Kenjutsu', 'Naginatajutsu', 'Shurikenjutsu', 'Kayakujutsu', 'Bajutsu');

-- CreateEnum
CREATE TYPE "Weapon" AS ENUM ('Sword', 'Spear', 'Naginata', 'Shuriken', 'Kunai', 'Kaginawa');

-- CreateTable
CREATE TABLE "Padowan" (
    "id" SERIAL NOT NULL,
    "bujinkanId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "senseiId" INTEGER NOT NULL,

    CONSTRAINT "Padowan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensei" (
    "id" SERIAL NOT NULL,
    "bujinkanId" INTEGER NOT NULL,
    "favoriteWeapon" "Weapon" NOT NULL,
    "mainArt" "MartialArt" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sensei_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bujinkan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mainArt" "MartialArt" NOT NULL,

    CONSTRAINT "Bujinkan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Padowan" ADD CONSTRAINT "Padowan_bujinkanId_fkey" FOREIGN KEY ("bujinkanId") REFERENCES "Bujinkan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Padowan" ADD CONSTRAINT "Padowan_senseiId_fkey" FOREIGN KEY ("senseiId") REFERENCES "Sensei"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensei" ADD CONSTRAINT "Sensei_bujinkanId_fkey" FOREIGN KEY ("bujinkanId") REFERENCES "Bujinkan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
