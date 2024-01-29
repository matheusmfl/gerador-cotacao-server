import { PlanoRepository } from "@/repositories/planoRepository"


interface searchByNamePlanoUseCase {
  name: string
}

export class SearchByNamePlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ name }: searchByNamePlanoUseCase) {
    const plano = await this.planoRepository.searchByName(name)

    return plano
  }

}