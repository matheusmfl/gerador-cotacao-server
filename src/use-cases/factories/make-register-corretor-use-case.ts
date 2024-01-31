import { PrismaCorretorRepository } from "@/repositories/prisma/prismaCorretorRepository"
import { RegisterCorretorUseCase } from "../corretor/registerCorretor"

export function makeRegisterCorretor() {
  const corretorRepository = new PrismaCorretorRepository()
  const registerCorretorUseCase = new RegisterCorretorUseCase(corretorRepository)
  return registerCorretorUseCase

}