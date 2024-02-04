import { expect, describe, it, beforeEach } from 'vitest'
import { RedeReferenciadaRepository } from '@/repositories/rede-referenciada-repository'
import { InMemoryRedeReferenciada } from '@/repositories/in-memory/rede-referenciada-repository'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { PlanoRepository } from '@/repositories/planoRepository'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { DeleteRedeReferenciadaUseCase } from './delete'


describe('Register Rede_Referenciada UseCase', () => {
  let sut: DeleteRedeReferenciadaUseCase
  let redeReferenciadaRepository: RedeReferenciadaRepository
  let planoRepository: PlanoRepository
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    redeReferenciadaRepository = new InMemoryRedeReferenciada()
    planoRepository = new InMemoryPlano()
    hospitalRepository = new InMemoryHospital()

    sut = new DeleteRedeReferenciadaUseCase(redeReferenciadaRepository, planoRepository, hospitalRepository)
  })

  it('should be able to delete a rede_referenciada', async () => {


    const planoId = 'Plano 01'
    const hospitalId = 'Hospital 01'

    const hospital = redeReferenciadaRepository.create(planoId, hospitalId)
    const hospital2 = redeReferenciadaRepository.create('plano 02', 'hospital 02')


    const hospitalDeleted = await redeReferenciadaRepository.delete(planoId, hospitalId)

    const findHospitalDeleted = await redeReferenciadaRepository.findByHospitalId(hospitalId)


    await expect(findHospitalDeleted).toBeNull()
  })

})