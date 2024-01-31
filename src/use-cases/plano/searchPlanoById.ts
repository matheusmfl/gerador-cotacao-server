import { PlanoRepository } from "@/repositories/planoRepository"
import { noPlanoFoundError } from "../errors/no-plano-found-error"


interface searchPlanoByIdUseCaseParams {
  id: string
}

export class SearchPlanoByIdUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ id }: searchPlanoByIdUseCaseParams) {
    const plano = await this.planoRepository.searchPlanoById(id)

    if (!plano) {
      throw new noPlanoFoundError()
    }

    return { plano }
  }

}