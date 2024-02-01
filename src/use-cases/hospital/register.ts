import { HospitalRepository } from "@/repositories/hospital-repository"
import { duplicatedItemsError } from "../errors/duplicated-items-error"


interface registerHospitalUseCaseProps {

  razao_social: string
  telefone: string
  endereco: string
  cro?: string | null
  bairro: string
  cidade: string
  estado: string
  cep?: string | null

}

export class RegisterHospitalUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ bairro, cidade, endereco, estado, razao_social, telefone, cep, cro }: registerHospitalUseCaseProps) {

    const hospitalAlreadyExists = await this.hospitalRepository.findByName(razao_social)

    if (hospitalAlreadyExists) {
      throw new duplicatedItemsError()
    }


    const hospital = await this.hospitalRepository.create({
      bairro, cidade, endereco, estado, razao_social, telefone, cep, cro,
    })



    return { hospital }
  }


}