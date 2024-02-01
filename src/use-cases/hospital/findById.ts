import { HospitalRepository } from "@/repositories/hospital-repository"
import { invalidDataError } from "../errors/invalid-data-error"
import { notFoundError } from "../errors/not-found-error"


interface findHospitalByIdUseCaseProps {

  id: string

}

export class FindHospitalByIdUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ id }: findHospitalByIdUseCaseProps) {



    const hospital = await this.hospitalRepository.findById(id)

    if (!hospital) {
      throw new notFoundError()
    }

    return { hospital }
  }


}