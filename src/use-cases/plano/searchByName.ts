import { PlanoRepository } from "@/repositories/planoRepository"


interface searchByNamePlanoUseCase {
  query: string
}

export class SearchByNamePlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ query }: searchByNamePlanoUseCase) {
    await this.planoRepository.searchByName(query)
  }


}