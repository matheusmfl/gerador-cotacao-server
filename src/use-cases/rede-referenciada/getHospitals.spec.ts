import { expect, describe, it, beforeEach } from 'vitest'
import { RedeReferenciadaRepository } from '@/repositories/rede-referenciada-repository'
import { InMemoryRedeReferenciada } from '@/repositories/in-memory/rede-referenciada-repository'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { PlanoRepository } from '@/repositories/planoRepository'
import { GetHospitalsUseCase } from './getHospitals'



describe('get Hospitals UseCase', () => {
  let sut: GetHospitalsUseCase
  let redeReferenciadaRepository: RedeReferenciadaRepository
  let planoRepository: PlanoRepository

  beforeEach(() => {
    redeReferenciadaRepository = new InMemoryRedeReferenciada()
    planoRepository = new InMemoryPlano()


    sut = new GetHospitalsUseCase(redeReferenciadaRepository, planoRepository)
  })

  it('should be able to get all hospitals', async () => {

    const planoId = 'plano 01'

    await planoRepository.create({ slug: 'plano 01', id: planoId, name: 'plano 01' })


    const { hospitals } = await sut.execute({ planoId })
    console.log(hospitals)


    await expect(hospitals).toHaveLength(1)
  })

})