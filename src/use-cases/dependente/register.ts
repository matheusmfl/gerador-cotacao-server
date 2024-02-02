import { ClienteRepository } from "@/repositories/cliente-repository"
import { DependenteRepository, IDependenteCreateProps } from "@/repositories/dependente-repository"
import { notFoundError } from "../errors/not-found-error"



export class RegisterDependenteUseCase {
  constructor(
    private dependenteRepository: DependenteRepository,
    private clienteRepository: ClienteRepository
  ) {

  }

  async execute({ clienteId, data }: IDependenteCreateProps) {

    const clientExists = await this.clienteRepository.findById(clienteId)

    if (!clientExists) {
      throw new notFoundError()
    }

    const dependente = await this.dependenteRepository.create({ clienteId, data })


    return { dependente }
  }


}