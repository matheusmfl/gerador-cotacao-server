import { ClienteRepository } from "@/repositories/cliente-repository"
import { DependenteRepository, IDependenteCreateProps } from "@/repositories/dependente-repository"
import { notFoundError } from "../errors/not-found-error"


interface deleteDependenteRequestArgs {
  clientId: string
  dependentId: string
}


export class DeleteDependenteUseCase {
  constructor(
    private dependenteRepository: DependenteRepository,
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ clientId, dependentId }: deleteDependenteRequestArgs) {

    const clientExists = await this.clienteRepository.findById(clientId)

    if (!clientExists) {
      throw new notFoundError()
    }

    const dependente = await this.dependenteRepository.delete(clientId, dependentId)


    return
  }


}