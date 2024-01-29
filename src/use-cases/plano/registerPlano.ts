import { PlanoRepository } from "@/repositories/planoRepository"
import { planoAlreadyExistsError } from "../errors/plano-already-exists-error"


interface registerPlanoUseCase {
  name: string
  slug: string

}

export class RegisterPlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ name, slug }: registerPlanoUseCase) {

    const planoWithSameSlug = await this.planoRepository.findBySlug(slug)

    if (planoWithSameSlug) {
      throw new planoAlreadyExistsError()
    }

    await this.planoRepository.create({
      name,
      slug
    })
  }


}