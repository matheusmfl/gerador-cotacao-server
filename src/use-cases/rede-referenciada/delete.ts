import { HospitalRepository } from "@/repositories/hospital-repository"
import { PlanoRepository } from "@/repositories/planoRepository"
import { RedeReferenciadaRepository } from "@/repositories/rede-referenciada-repository"
import { HospitalDoesNotExistsError } from "../errors/hospital-does-not-exists-error"
import { PlanoDoesNotExistsError } from "../errors/plano-does-not-exists-error"


interface deleteRedeReferenciadaUseCaseRequest {
  planoId: string
  hospitalId: string
}



export class DeleteRedeReferenciadaUseCase {
  constructor(
    private redeReferenciadaRepository: RedeReferenciadaRepository,
    private planoRepository: PlanoRepository,
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ planoId, hospitalId }: deleteRedeReferenciadaUseCaseRequest): Promise<void> {

    const hospital = await this.hospitalRepository.findById(hospitalId)
    if (!hospital) {
      throw new HospitalDoesNotExistsError()
    }

    const plano = await this.planoRepository.findById(planoId)
    if (!plano) {
      throw new PlanoDoesNotExistsError()
    }




    await this.redeReferenciadaRepository.delete(planoId, hospitalId)

    return

  }


}