import { PlanoRepository } from "@/repositories/planoRepository"
import { notFoundError } from "../errors/not-found-error"





export class FindAllPlanosUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute() {

    const planos = await this.planoRepository.findAll()

    if (!planos) {
      throw new notFoundError()
    }

    return { planos }
  }

}