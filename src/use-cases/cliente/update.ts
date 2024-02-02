import { ClienteRepository } from "@/repositories/cliente-repository"
import { notFoundError } from "../errors/not-found-error"


interface updateClienteUseCaseRequest {
  name: string
  documento: string
  preco?: number
  id: string
}

export class UpdateClienteUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ name, documento, preco, id }: updateClienteUseCaseRequest) {

    const cliente = await this.clienteRepository.findById(id)

    if (!cliente) {
      throw new notFoundError()
    }

    const clienteUpdated = await this.clienteRepository.update({ id }, {
      data: {
        nome: name,
        preco,
        documento
      }
    })

    return { clienteUpdated }
  }


}