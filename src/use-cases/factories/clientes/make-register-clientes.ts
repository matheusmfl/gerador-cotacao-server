import { PrismaClienteRepository } from "@/repositories/prisma/prismaClienteRepository"
import { CreateClienteUseCase } from "@/use-cases/cliente/createUseCase"

export function makeRegisterCliente() {
  const clienteRepository = new PrismaClienteRepository()
  const createClienteUseCase = new CreateClienteUseCase(clienteRepository)

  return createClienteUseCase
}