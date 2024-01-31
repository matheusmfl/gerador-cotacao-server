import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { RegisterPlanoUseCase } from "../plano/registerPlano"

export function makerRegisterPlano() {
  const planoRepository = new PrismaPlanoRepository()
  const registerPlanoUseCase = new RegisterPlanoUseCase(planoRepository)

  return registerPlanoUseCase
}