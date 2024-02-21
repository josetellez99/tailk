/*
  Warnings:

  - Added the required column `description` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL;
