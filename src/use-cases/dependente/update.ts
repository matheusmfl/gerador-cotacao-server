import { DependenteRepository } from "@/repositories/dependente-repository"
import { notFoundError } from "../errors/not-found-error"
import { Dependente } from "@prisma/client"


interface IUpdateDependenteUseCaseRequest {
  id: string
  name: string
  idade: number
  price: number
}

interface IUpdateDependenteUseCaseResponse {
  dependenteUpdated: Dependente
}

export class UpdateDependenteUseCase {
  constructor(
    private dependenteRepository: DependenteRepository,
  ) {

  }

  async execute({ id, idade, name, price }: IUpdateDependenteUseCaseRequest): Promise<IUpdateDependenteUseCaseResponse> {

    const dependenteExists = await this.dependenteRepository.findById(id)

    if (!dependenteExists) {
      throw new notFoundError()
    }

    const dependenteUpdated = await this.dependenteRepository.update({ id }, {
      data: {
        idade, nome: name, preco: price
      }
    })


    return { dependenteUpdated }
  }


}