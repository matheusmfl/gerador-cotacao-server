import { PrismaClienteRepository } from "@/repositories/prisma/prismaClienteRepository"
import { FindClienteByIdUseCase } from "@/use-cases/cliente/findById"

export function makeFindByIdClientes() {
  const clienteRepository = new PrismaClienteRepository()
  const findClientById = new FindClienteByIdUseCase(clienteRepository)

  return findClientById
}