/*
  Warnings:

  - Added the required column `sstyle` to the `userstyle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userstyle" ADD COLUMN     "sstyle" TEXT NOT NULL;
