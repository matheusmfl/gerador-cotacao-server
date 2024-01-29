/*
  Warnings:

  - Added the required column `name` to the `corretor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "corretor" ADD COLUMN     "name" TEXT NOT NULL;
