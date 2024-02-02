import { ClienteRepository } from "@/repositories/cliente-repository"
import { notFoundError } from "../errors/not-found-error"


interface deleteClienteUseCaseRequest {
  id: string
}

export class DeleteClienteUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ id }: deleteClienteUseCaseRequest) {

    const cliente = await this.clienteRepository.findById(id)

    if (!cliente) {
      throw new notFoundError()
    }

    await this.clienteRepository.delete(id)

    return
  }


}