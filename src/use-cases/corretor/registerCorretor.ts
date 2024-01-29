import { CorretorRepository } from "@/repositories/corretorRepository"


interface registerCorretorUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterCorretorUseCase {
  constructor(
    private corretorRepository: CorretorRepository
  ) {

  }

  async execute({ name, email, password }: registerCorretorUseCaseRequest) {
    await this.corretorRepository.create({
      name,
      email,
      password
    })
  }


}