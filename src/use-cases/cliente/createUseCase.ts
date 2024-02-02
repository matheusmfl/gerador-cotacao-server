import { ClienteRepository } from "@/repositories/cliente-repository"
import { duplicatedItemsError } from "../errors/duplicated-items-error"


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

    const clienteAlreadyExists = await this.clienteRepository.findByDocumento(documento)

    if (clienteAlreadyExists) {
      throw new duplicatedItemsError()
    }
    const cliente = await this.clienteRepository.create({
      nome: name,
      documento,
    })

    return { cliente }
  }


}