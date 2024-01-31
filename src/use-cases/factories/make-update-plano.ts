import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { UpdatePlanoUseCase } from "../plano/updatePlano"

export function makeUpdatePlanoUseCase() {
  const planoRepository = new PrismaPlanoRepository()
  const updatePlanoUseCase = new UpdatePlanoUseCase(planoRepository)

  return updatePlanoUseCase
}