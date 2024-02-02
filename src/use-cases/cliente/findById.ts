import { ClienteRepository } from "@/repositories/cliente-repository"


interface createClienteUseCaseRequest {
  name: string
  documento: string
}

export class CreateClienteUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ name, documento }: createClienteUseCaseRequest) {
    const cliente = await this.clienteRepository.create({
      nome: name,
      documento,
    })

    return { cliente }
  }


}