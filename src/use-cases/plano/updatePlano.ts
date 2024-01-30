import { PlanoRepository } from "@/repositories/planoRepository"
import { Slug } from "@/services/slug-generator"
import { Prisma } from "@prisma/client"

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

    // @ts-ignore
    const updateArgs: Prisma.PlanoUpdateArgs = {
      data: {
        name,
        slug: newSlug,

      },
    };



    const newPlano = await this.planoRepository.updatePlano({
      id
    }, updateArgs
    )

    return newPlano

  }


}