/*
  Warnings:

  - You are about to drop the column `backend` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `database` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `frontend` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `other` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `skills` table. All the data in the column will be lost.
  - Added the required column `skillname` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skills" DROP COLUMN "backend",
DROP COLUMN "database",
DROP COLUMN "frontend",
DROP COLUMN "languages",
DROP COLUMN "mobile",
DROP COLUMN "other",
DROP COLUMN "style",
ADD COLUMN     "skillname" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT[];
