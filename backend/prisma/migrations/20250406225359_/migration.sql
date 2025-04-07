/*
  Warnings:

  - You are about to drop the column `styles` on the `User` table. All the data in the column will be lost.
  - Added the required column `style` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `style` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "styles",
ADD COLUMN     "style" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "education" ADD COLUMN     "style" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "experience" ADD COLUMN     "style" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "style" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "style" TEXT NOT NULL;
