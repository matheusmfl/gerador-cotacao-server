import { ClienteRepository } from "@/repositories/cliente-repository"
import { notFoundError } from "../errors/not-found-error"


interface findClientByNameRequest {
  name: string
}


export class FindClienteByNameUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ name }: findClientByNameRequest) {
    const clientes = await this.clienteRepository.findByName(name)

    if (!clientes) {
      throw new notFoundError()
    }
    return clientes
  }


}