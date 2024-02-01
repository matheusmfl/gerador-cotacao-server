import { HospitalRepository } from "@/repositories/hospital-repository"
import { notFoundError } from "../errors/not-found-error"



interface updateHospitalUseCase {
  id: string
  razao_social?: string
  telefone?: string
  endereco?: string
  cro?: string
  bairro?: string
  cidade?: string
  estado?: string
  cep?: string
}

export class UpdateHospitalUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ id, bairro, cep, cidade, cro, endereco, estado, razao_social, telefone }: updateHospitalUseCase) {

    const hospital = await this.hospitalRepository.findById(id)

    if (!hospital) {
      throw new notFoundError()
    }


    const updatedHospital = await this.hospitalRepository.update({
      id
    }, {
      data: {
        bairro,
        cep,
        cidade,
        cro,
        endereco,
        estado,
        razao_social,
        telefone
      }
    }
    )

    return updatedHospital

  }


}