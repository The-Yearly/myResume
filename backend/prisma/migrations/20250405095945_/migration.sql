-- CreateTable
CREATE TABLE "User" (
    "uid" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "project" (
    "pid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "tags" TEXT[],
    "github" TEXT NOT NULL,
    "Link" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "user_project" (
    "pid" INTEGER NOT NULL,
    "uid" INTEGER NOT NULL,

    CONSTRAINT "user_project_pkey" PRIMARY KEY ("pid","uid")
);

-- CreateTable
CREATE TABLE "experience" (
    "eid" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "corp" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("eid")
);

-- CreateTable
CREATE TABLE "user_experience" (
    "eid" INTEGER NOT NULL,
    "uid" INTEGER NOT NULL,

    CONSTRAINT "user_experience_pkey" PRIMARY KEY ("eid","uid")
);

-- CreateTable
CREATE TABLE "education" (
    "edid" SERIAL NOT NULL,
    "inst" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("edid")
);

-- CreateTable
CREATE TABLE "user_education" (
    "edid" INTEGER NOT NULL,
    "uid" INTEGER NOT NULL,

    CONSTRAINT "user_education_pkey" PRIMARY KEY ("edid","uid")
);

-- CreateTable
CREATE TABLE "skills" (
    "sid" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "frontend" TEXT[],
    "backend" TEXT[],
    "database" TEXT[],
    "mobile" TEXT[],
    "other" TEXT[],
    "languages" TEXT[],

    CONSTRAINT "skills_pkey" PRIMARY KEY ("uid","sid")
);

-- CreateTable
CREATE TABLE "contact" (
    "cid" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("cid","uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "skills_uid_key" ON "skills"("uid");

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_pid_fkey" FOREIGN KEY ("pid") REFERENCES "project"("pid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_eid_fkey" FOREIGN KEY ("eid") REFERENCES "experience"("eid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_education" ADD CONSTRAINT "user_education_edid_fkey" FOREIGN KEY ("edid") REFERENCES "education"("edid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_education" ADD CONSTRAINT "user_education_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
