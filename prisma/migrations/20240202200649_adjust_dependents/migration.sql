/*
  Warnings:

  - You are about to drop the `Dependente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dependentes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dependente" DROP CONSTRAINT "Dependente_dependentesId_fkey";

-- DropForeignKey
ALTER TABLE "dependentes" DROP CONSTRAINT "dependentes_clienteId_fkey";

-- DropTable
DROP TABLE "Dependente";

-- DropTable
DROP TABLE "dependentes";

-- CreateTable
CREATE TABLE "dependente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "preco" INTEGER,
    "clienteId" TEXT NOT NULL,

    CONSTRAINT "dependente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dependente" ADD CONSTRAINT "dependente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
