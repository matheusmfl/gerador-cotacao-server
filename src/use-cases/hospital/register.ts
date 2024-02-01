import { HospitalRepository } from "@/repositories/hospital-repository"
import { invalidDataError } from "../errors/invalid-data-error"


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

    const requiredFields: Array<keyof registerHospitalUseCaseProps> = [
      'razao_social',
      'telefone',
      'endereco',
      'bairro',
      'cidade',
      'estado',
    ];

    const hospitalData: registerHospitalUseCaseProps = {
      bairro, razao_social, estado, telefone, endereco, cidade
    }

    for (const field of requiredFields) {
      if (!hospitalData[field]) {
        throw new invalidDataError();
      }
    }

    const hospital = await this.hospitalRepository.create({
      bairro, cidade, endereco, estado, razao_social, telefone, cep, cro,
    })



    return { hospital }
  }


}