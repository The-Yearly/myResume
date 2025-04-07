/*
  Warnings:

  - You are about to drop the `bioandcontact` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `about` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hero` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subhero` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bioandcontact" DROP CONSTRAINT "bioandcontact_uid_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "hero" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "subhero" TEXT NOT NULL;

-- DropTable
DROP TABLE "bioandcontact";
