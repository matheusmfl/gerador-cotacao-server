import { HospitalRepository } from "@/repositories/hospital-repository"


export class FindAllHospitalsUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute() {



    const hospital = await this.hospitalRepository.findAll()



    return hospital
  }


}