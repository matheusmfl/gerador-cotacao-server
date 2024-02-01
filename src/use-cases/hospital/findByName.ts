import { HospitalRepository } from "@/repositories/hospital-repository"
import { notFoundError } from "../errors/not-found-error"


interface findHospitalByNameUseCaseProps {

  name: string

}

export class FindHospitalByNameUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ name }: findHospitalByNameUseCaseProps) {



    const hospital = await this.hospitalRepository.findByName(name)

    if (!hospital) {
      throw new notFoundError()
    }

    return { hospital }
  }


}