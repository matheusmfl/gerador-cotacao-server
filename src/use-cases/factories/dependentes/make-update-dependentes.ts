import { PrismaDependenteRepository } from "@/repositories/prisma/prismaDependenteRepository"
import { UpdateDependenteUseCase } from "@/use-cases/dependente/update"

export function makeUpdateDependente() {
  const dependenteRepository = new PrismaDependenteRepository()
  const updateDependenteUseCase = new UpdateDependenteUseCase(dependenteRepository)

  return updateDependenteUseCase
}