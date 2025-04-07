/*
  Warnings:

  - Added the required column `uid` to the `hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hero" ADD COLUMN     "uid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "hero" ADD CONSTRAINT "hero_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
