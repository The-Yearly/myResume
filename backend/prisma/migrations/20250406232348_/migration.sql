/*
  Warnings:

  - You are about to drop the column `about` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - The primary key for the `skills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sid` on the `skills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "about",
DROP COLUMN "email",
DROP COLUMN "image",
DROP COLUMN "linkedin",
DROP COLUMN "location",
DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "skills" DROP CONSTRAINT "skills_pkey",
DROP COLUMN "sid",
ADD CONSTRAINT "skills_pkey" PRIMARY KEY ("uid");

-- CreateTable
CREATE TABLE "contact" (
    "uid" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "About" (
    "uid" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "style" TEXT NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "About" ADD CONSTRAINT "About_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
