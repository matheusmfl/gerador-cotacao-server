
import { notFoundError } from "../errors/not-found-error"
import { HospitalRepository } from "@/repositories/hospital-repository"



interface deleteHospitalUseCaseProps {
  id: string

}


export class DeleteHospitalUseCase {
  constructor(
    private hospitalRepository: HospitalRepository
  ) {

  }

  async execute({ id }: deleteHospitalUseCaseProps): Promise<void> {

    const hospital = await this.hospitalRepository.findById(id)

    if (!hospital) {
      throw new notFoundError()
    }

    await this.hospitalRepository.delete(id)

    return
  }


}