import { PlanoRepository } from "@/repositories/planoRepository"
import { noPlanoFoundError } from "../errors/no-plano-found-error"



interface deletePlanoUseCaseProps {
  id: string

}


export class DeletePlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ id }: deletePlanoUseCaseProps): Promise<void> {

    const plano = await this.planoRepository.searchPlanoById(id)

    if (!plano) {
      throw new noPlanoFoundError()
    }

    await this.planoRepository.deletePlano(id)



    return
  }


}