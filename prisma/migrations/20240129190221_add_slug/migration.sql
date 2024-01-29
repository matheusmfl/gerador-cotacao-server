/*
  Warnings:

  - Added the required column `slug` to the `planos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planos" ADD COLUMN     "slug" TEXT NOT NULL;
