import { PlanoRepository } from "@/repositories/planoRepository"
import { notFoundError } from "../errors/not-found-error"



interface deletePlanoUseCaseProps {
  id: string

}


export class DeletePlano {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ id }: deletePlanoUseCaseProps): Promise<void> {

    const plano = await this.planoRepository.findById(id)

    if (!plano) {
      throw new notFoundError()
    }

    await this.planoRepository.deletePlano(id)



    return
  }


}