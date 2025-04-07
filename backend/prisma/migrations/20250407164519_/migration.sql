/*
  Warnings:

  - The primary key for the `About` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hero` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subhero` on the `User` table. All the data in the column will be lost.
  - The primary key for the `contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `skills` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "About" DROP CONSTRAINT "About_pkey",
ADD COLUMN     "aid" SERIAL NOT NULL,
ADD CONSTRAINT "About_pkey" PRIMARY KEY ("aid");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "hero",
DROP COLUMN "style",
DROP COLUMN "subhero";

-- AlterTable
ALTER TABLE "contact" DROP CONSTRAINT "contact_pkey",
ADD COLUMN     "cid" SERIAL NOT NULL,
ADD CONSTRAINT "contact_pkey" PRIMARY KEY ("cid");

-- AlterTable
ALTER TABLE "education" DROP CONSTRAINT "education_pkey",
ADD COLUMN     "edid" SERIAL NOT NULL,
ADD CONSTRAINT "education_pkey" PRIMARY KEY ("edid");

-- AlterTable
ALTER TABLE "experience" DROP CONSTRAINT "experience_pkey",
ADD COLUMN     "exid" SERIAL NOT NULL,
ADD CONSTRAINT "experience_pkey" PRIMARY KEY ("exid");

-- AlterTable
ALTER TABLE "project" DROP CONSTRAINT "project_pkey",
ADD COLUMN     "pid" SERIAL NOT NULL,
ADD CONSTRAINT "project_pkey" PRIMARY KEY ("pid");

-- AlterTable
ALTER TABLE "skills" DROP CONSTRAINT "skills_pkey",
ADD COLUMN     "sid" SERIAL NOT NULL,
ADD CONSTRAINT "skills_pkey" PRIMARY KEY ("sid");

-- CreateTable
CREATE TABLE "hero" (
    "hid" SERIAL NOT NULL,
    "style" TEXT NOT NULL,
    "hero" TEXT NOT NULL,
    "subhero" TEXT NOT NULL,

    CONSTRAINT "hero_pkey" PRIMARY KEY ("hid")
);
