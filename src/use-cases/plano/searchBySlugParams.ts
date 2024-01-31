import { PlanoRepository } from "@/repositories/planoRepository"
import { noPlanoFoundError } from "../errors/no-plano-found-error"


interface searchBySlugParamsUseCase {
  slug: string
}

export class SearchBySlugParamsUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ slug }: searchBySlugParamsUseCase) {
    const plano = await this.planoRepository.searchBySlugParams(slug)

    if (!plano) {
      throw new noPlanoFoundError()
    }

    return { plano }
  }

}