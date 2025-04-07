/*
  Warnings:

  - The primary key for the `education` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `edid` on the `education` table. All the data in the column will be lost.
  - The primary key for the `experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eid` on the `experience` table. All the data in the column will be lost.
  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pid` on the `project` table. All the data in the column will be lost.
  - You are about to drop the `user_education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_project` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `uid` to the `education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_education" DROP CONSTRAINT "user_education_edid_fkey";

-- DropForeignKey
ALTER TABLE "user_education" DROP CONSTRAINT "user_education_uid_fkey";

-- DropForeignKey
ALTER TABLE "user_experience" DROP CONSTRAINT "user_experience_eid_fkey";

-- DropForeignKey
ALTER TABLE "user_experience" DROP CONSTRAINT "user_experience_uid_fkey";

-- DropForeignKey
ALTER TABLE "user_project" DROP CONSTRAINT "user_project_pid_fkey";

-- DropForeignKey
ALTER TABLE "user_project" DROP CONSTRAINT "user_project_uid_fkey";

-- DropIndex
DROP INDEX "skills_uid_key";

-- AlterTable
ALTER TABLE "education" DROP CONSTRAINT "education_pkey",
DROP COLUMN "edid",
ADD COLUMN     "uid" INTEGER NOT NULL,
ADD CONSTRAINT "education_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "experience" DROP CONSTRAINT "experience_pkey",
DROP COLUMN "eid",
ADD COLUMN     "uid" INTEGER NOT NULL,
ADD CONSTRAINT "experience_pkey" PRIMARY KEY ("uid");

-- AlterTable
ALTER TABLE "project" DROP CONSTRAINT "project_pkey",
DROP COLUMN "pid",
ADD COLUMN     "uid" INTEGER NOT NULL,
ADD CONSTRAINT "project_pkey" PRIMARY KEY ("uid");

-- DropTable
DROP TABLE "user_education";

-- DropTable
DROP TABLE "user_experience";

-- DropTable
DROP TABLE "user_project";

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
