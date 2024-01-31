import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { FindAllPlanosUseCase } from "../plano/findAll"


export function makeFindAllPlanos() {
  const planoRepository = new PrismaPlanoRepository()
  const findAllPlanos = new FindAllPlanosUseCase(planoRepository)

  return findAllPlanos
}