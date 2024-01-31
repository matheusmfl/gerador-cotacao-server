import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { SearchById } from "../plano/searchPlanoById"

export function makeSearchById() {
  const planoRepository = new PrismaPlanoRepository()
  const searchBySlugUseCase = new SearchById(planoRepository)

  return searchBySlugUseCase
}