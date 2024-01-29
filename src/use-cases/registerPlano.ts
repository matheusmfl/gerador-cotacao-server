import { PlanoRepository } from "@/repositories/planoRepository"


interface registerPlanoUseCase {
  name: string

}

export class RegisterPlanoUseCase {
  constructor(
    private planoRepository: PlanoRepository
  ) {

  }

  async execute({ name }: registerPlanoUseCase) {
    await this.planoRepository.create({
      name,
    })
  }


}