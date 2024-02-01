import { PlanoRepository } from "@/repositories/planoRepository"
import { notFoundError } from "../errors/not-found-error"


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
      throw new notFoundError()
    }

    return { plano }
  }

}