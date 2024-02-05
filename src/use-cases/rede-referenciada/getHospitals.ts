import { PlanoRepository } from "@/repositories/planoRepository"
import { RedeReferenciadaRepository } from "@/repositories/rede-referenciada-repository"
import { Hospital } from "@prisma/client"

import { PlanoDoesNotExistsError } from "../errors/plano-does-not-exists-error"



interface GetHospitalsUseCaseRequest {
  planoId: string
}

interface GetHospitalsUseCaseResponse {
  hospitals: Hospital[]

}

export class GetHospitalsUseCase {
  constructor(
    private redeReferenciadaRepository: RedeReferenciadaRepository,
    private planoRepository: PlanoRepository,
  ) {

  }

  async execute({ planoId }: GetHospitalsUseCaseRequest): Promise<GetHospitalsUseCaseResponse> {


    const plano = await this.planoRepository.findById(planoId)
    if (!plano) {
      throw new PlanoDoesNotExistsError()
    }

    const hospitals = await this.redeReferenciadaRepository.getHospitals(planoId)


    return { hospitals }

  }


}