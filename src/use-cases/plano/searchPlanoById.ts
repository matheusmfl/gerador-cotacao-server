import { PlanoRepository } from "@/repositories/planoRepository"
import { noPlanoFoundError } from "../errors/no-plano-found-error"


interface searchPlanoByIdUseCaseParams {
  id: string
}

export class SearchById {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ id }: searchPlanoByIdUseCaseParams) {
    console.log(id)
    const plano = await this.planoRepository.findById({ id }, {})

    if (!plano) {
      throw new noPlanoFoundError()
    }

    return { plano }
  }

}