import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { SearchPlanoByIdUseCase } from "../plano/searchPlanoById"

export function makeSearchBySlugPlano() {
  const planoRepository = new PrismaPlanoRepository()
  const searchBySlugUseCase = new SearchPlanoByIdUseCase(planoRepository)

  return searchBySlugUseCase
}