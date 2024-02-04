import { HospitalRepository } from "@/repositories/hospital-repository"
import { PlanoRepository } from "@/repositories/planoRepository"
import { RedeReferenciadaRepository } from "@/repositories/rede-referenciada-repository"
import { HospitaisPlano } from "@prisma/client"
import { HospitalDoesNotExistsError } from "../errors/hospital-does-not-exists-error"
import { PlanoDoesNotExistsError } from "../errors/plano-does-not-exists-error"


interface registerRedeReferenciadaUseCaseRequest {
  planoId: string
  hospitalId: string
}

interface registerRedeReferenciadaUseCaseResponse {
  rede_referenciada: HospitaisPlano

}

export class RegisterRedeReferenciadaUseCase {
  constructor(
    private redeReferenciadaRepository: RedeReferenciadaRepository,
    private planoRepository: PlanoRepository,
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ planoId, hospitalId }: registerRedeReferenciadaUseCaseRequest): Promise<registerRedeReferenciadaUseCaseResponse> {

    const hospital = await this.hospitalRepository.findById(hospitalId)
    if (!hospital) {
      throw new HospitalDoesNotExistsError()
    }

    const plano = await this.planoRepository.findById(planoId)
    if (!plano) {
      throw new PlanoDoesNotExistsError()
    }




    const rede_referenciada = await this.redeReferenciadaRepository.create(planoId, hospitalId)

    return { rede_referenciada }

  }


}