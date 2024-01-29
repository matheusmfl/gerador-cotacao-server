/*
  Warnings:

  - The primary key for the `rede_referenciada` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bairro` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `corretorId` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `cro` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `razao_social` on the `rede_referenciada` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `rede_referenciada` table. All the data in the column will be lost.
  - The `id` column on the `rede_referenciada` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `RedesReferenciadasPlanos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hospitalId` to the `rede_referenciada` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plano_id` to the `rede_referenciada` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RedesReferenciadasPlanos" DROP CONSTRAINT "RedesReferenciadasPlanos_plano_id_fkey";

-- DropForeignKey
ALTER TABLE "RedesReferenciadasPlanos" DROP CONSTRAINT "RedesReferenciadasPlanos_rede_referenciada_id_fkey";

-- DropForeignKey
ALTER TABLE "rede_referenciada" DROP CONSTRAINT "rede_referenciada_corretorId_fkey";

-- AlterTable
ALTER TABLE "planos" ADD COLUMN     "hospitalId" TEXT;

-- AlterTable
ALTER TABLE "rede_referenciada" DROP CONSTRAINT "rede_referenciada_pkey",
DROP COLUMN "bairro",
DROP COLUMN "cep",
DROP COLUMN "cidade",
DROP COLUMN "corretorId",
DROP COLUMN "cro",
DROP COLUMN "endereco",
DROP COLUMN "estado",
DROP COLUMN "razao_social",
DROP COLUMN "telefone",
ADD COLUMN     "hospitalId" TEXT NOT NULL,
ADD COLUMN     "plano_id" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "rede_referenciada_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "RedesReferenciadasPlanos";

-- CreateTable
CREATE TABLE "hospital" (
    "id" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cro" TEXT,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT,
    "corretorId" TEXT,

    CONSTRAINT "hospital_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rede_referenciada" ADD CONSTRAINT "rede_referenciada_plano_id_fkey" FOREIGN KEY ("plano_id") REFERENCES "planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rede_referenciada" ADD CONSTRAINT "rede_referenciada_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planos" ADD CONSTRAINT "planos_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospital" ADD CONSTRAINT "hospital_corretorId_fkey" FOREIGN KEY ("corretorId") REFERENCES "corretor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
