import { ClienteRepository } from "@/repositories/cliente-repository"
import { Cliente } from "@prisma/client"
import { notFoundError } from "../errors/not-found-error"


interface findClienteByIdRequest {
  id: string
}


export class FindClienteByIdUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ id }: findClienteByIdRequest) {
    const cliente = await this.clienteRepository.findById(id)

    if (!cliente) {
      throw new notFoundError()
    }
    return { cliente }
  }


}