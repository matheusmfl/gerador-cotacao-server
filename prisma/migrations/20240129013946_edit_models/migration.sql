/*
  Warnings:

  - You are about to drop the `Modalidade` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cotacao" DROP CONSTRAINT "cotacao_modalidadeId_fkey";

-- DropTable
DROP TABLE "Modalidade";

-- CreateTable
CREATE TABLE "modalidade" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "modalidade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cotacao" ADD CONSTRAINT "cotacao_modalidadeId_fkey" FOREIGN KEY ("modalidadeId") REFERENCES "modalidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
