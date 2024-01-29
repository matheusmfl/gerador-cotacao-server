-- CreateTable
CREATE TABLE "corretor" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "corretor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedesReferenciadasPlanos" (
    "id" SERIAL NOT NULL,
    "plano_id" TEXT NOT NULL,
    "rede_referenciada_id" TEXT NOT NULL,

    CONSTRAINT "RedesReferenciadasPlanos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rede_referenciada" (
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

    CONSTRAINT "rede_referenciada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "preco" INTEGER,
    "dependentesId" TEXT,

    CONSTRAINT "Dependente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dependentes" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT,

    CONSTRAINT "dependentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "preco" INTEGER,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modalidade" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Modalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cotacao" (
    "id" TEXT NOT NULL,
    "corretorId" TEXT,
    "planoId" TEXT,
    "clienteId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_price" INTEGER NOT NULL,
    "modalidadeId" TEXT NOT NULL,

    CONSTRAINT "cotacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "corretor_email_key" ON "corretor"("email");

-- AddForeignKey
ALTER TABLE "RedesReferenciadasPlanos" ADD CONSTRAINT "RedesReferenciadasPlanos_plano_id_fkey" FOREIGN KEY ("plano_id") REFERENCES "planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedesReferenciadasPlanos" ADD CONSTRAINT "RedesReferenciadasPlanos_rede_referenciada_id_fkey" FOREIGN KEY ("rede_referenciada_id") REFERENCES "rede_referenciada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rede_referenciada" ADD CONSTRAINT "rede_referenciada_corretorId_fkey" FOREIGN KEY ("corretorId") REFERENCES "corretor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependente" ADD CONSTRAINT "Dependente_dependentesId_fkey" FOREIGN KEY ("dependentesId") REFERENCES "dependentes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dependentes" ADD CONSTRAINT "dependentes_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cotacao" ADD CONSTRAINT "cotacao_corretorId_fkey" FOREIGN KEY ("corretorId") REFERENCES "corretor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cotacao" ADD CONSTRAINT "cotacao_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "planos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cotacao" ADD CONSTRAINT "cotacao_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cotacao" ADD CONSTRAINT "cotacao_modalidadeId_fkey" FOREIGN KEY ("modalidadeId") REFERENCES "Modalidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
