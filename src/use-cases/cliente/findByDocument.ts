import { ClienteRepository } from "@/repositories/cliente-repository"
import { notFoundError } from "../errors/not-found-error"


interface findClienteByDocumentoRequest {
  documento: string
}


export class FindClienteByDocumentoUseCase {
  constructor(
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ documento }: findClienteByDocumentoRequest) {
    const cliente = await this.clienteRepository.findByDocumento(documento)

    if (!cliente) {
      throw new notFoundError()
    }
    return { cliente }
  }


}