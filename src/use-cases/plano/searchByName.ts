import { PlanoRepository } from "@/repositories/planoRepository"
import { noPlanoFoundError } from "../errors/no-plano-found-error"


interface searchByNamePlanoUseCase {
  query: string
}

export class SearchByNamePlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ query }: searchByNamePlanoUseCase) {
    const plano = await this.planoRepository.searchByQueryName(query)

    if (!plano) {
      throw new noPlanoFoundError()
    }

    return plano
  }

}