import { PrismaClienteRepository } from "@/repositories/prisma/prismaClienteRepository"
import { PrismaDependenteRepository } from "@/repositories/prisma/prismaDependenteRepository"
import { FindClienteByIdUseCase } from "@/use-cases/cliente/findById"
import { RegisterDependenteUseCase } from "@/use-cases/dependente/register"

export function makeRegisterDependente() {
  const dependenteRepository = new PrismaDependenteRepository()
  const clienteRepository = new PrismaClienteRepository()
  const registerDependente = new RegisterDependenteUseCase(dependenteRepository, clienteRepository)

  return registerDependente
}