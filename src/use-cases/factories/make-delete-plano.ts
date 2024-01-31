import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { DeletePlano } from "../plano/deletePlano"


export function makeDeletePlanoUseCase() {
  const planoRepository = new PrismaPlanoRepository()
  const deletePlanoUseCase = new DeletePlano(planoRepository)

  return deletePlanoUseCase
}