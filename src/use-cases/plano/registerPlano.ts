import { PlanoRepository } from "@/repositories/planoRepository"


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
    await this.planoRepository.create({
      name,
      slug
    })
  }


}