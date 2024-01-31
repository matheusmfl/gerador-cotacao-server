import { PlanoRepository } from "@/repositories/planoRepository"
import { Slug } from "@/services/slug-generator"


interface updatePlanoUseCase {
  name: string
  id: string
}

export class UpdatePlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ name, id }: updatePlanoUseCase) {

    const newSlug = Slug.createFromText(name).value

    const newPlano = await this.planoRepository.updatePlano({
      id
    }, {
      data: {
        name,
        slug: newSlug
      }
    }
    )

    return newPlano

  }


}