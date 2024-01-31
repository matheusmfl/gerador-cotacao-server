import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { DeletePlanoUseCase } from "../plano/deletePlanoUseCase"


export function makeDeletePlanoUseCase() {
  const planoRepository = new PrismaPlanoRepository()
  const deletePlanoUseCase = new DeletePlanoUseCase(planoRepository)

  return deletePlanoUseCase
}