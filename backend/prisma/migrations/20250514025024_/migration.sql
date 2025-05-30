/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "contact" ADD COLUMN     "github" TEXT NOT NULL DEFAULT 'https://github.com/',
ALTER COLUMN "linkedin" SET DEFAULT 'https://www.linkedin.com/';

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
