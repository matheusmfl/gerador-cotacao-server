import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { SearchBySlugParamsUseCase } from "../plano/searchBySlugParams"

export function makeSearchBySlugPlano() {
  const planoRepository = new PrismaPlanoRepository()
  const searchBySlugUseCase = new SearchBySlugParamsUseCase(planoRepository)

  return searchBySlugUseCase
}