-- CreateEnum
CREATE TYPE "TaskPriorityType" AS ENUM ('low', 'medium', 'high');

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT E'',
    "phone" TEXT NOT NULL DEFAULT E'',
    "instagram" TEXT NOT NULL DEFAULT E'',
    "facebook" TEXT NOT NULL DEFAULT E'',
    "linkedin" TEXT NOT NULL DEFAULT E'',
    "emailContacts" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL DEFAULT E'',
    "priority" "TaskPriorityType",
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "assignedTo" TEXT,
    "finishBy" TIMESTAMP(3),

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- CreateIndex
CREATE INDEX "Task_assignedTo_idx" ON "Task"("assignedTo");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assignedTo_fkey" FOREIGN KEY ("assignedTo") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;
