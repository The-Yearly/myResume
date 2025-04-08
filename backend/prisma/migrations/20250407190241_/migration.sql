/*
  Warnings:

  - You are about to drop the column `style` on the `education` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `experience` table. All the data in the column will be lost.
  - You are about to drop the column `style` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "education" DROP COLUMN "style";

-- AlterTable
ALTER TABLE "experience" DROP COLUMN "style";

-- AlterTable
ALTER TABLE "project" DROP COLUMN "style";

-- CreateTable
CREATE TABLE "userstyle" (
    "uid" INTEGER NOT NULL,
    "pstyle" TEXT NOT NULL,
    "estyle" TEXT NOT NULL,
    "exstyle" TEXT NOT NULL,

    CONSTRAINT "userstyle_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "userstyle" ADD CONSTRAINT "userstyle_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
