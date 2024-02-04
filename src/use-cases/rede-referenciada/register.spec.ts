import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterRedeReferenciadaUseCase } from './register'
import { RedeReferenciadaRepository } from '@/repositories/rede-referenciada-repository'
import { InMemoryRedeReferenciada } from '@/repositories/in-memory/rede-referenciada-repository'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { PlanoRepository } from '@/repositories/planoRepository'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { HospitalDoesNotExistsError } from '../errors/hospital-does-not-exists-error'
import { PlanoDoesNotExistsError } from '../errors/plano-does-not-exists-error'


describe('Register Rede_Referenciada UseCase', () => {
  let sut: RegisterRedeReferenciadaUseCase
  let redeReferenciadaRepository: RedeReferenciadaRepository
  let planoRepository: PlanoRepository
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    redeReferenciadaRepository = new InMemoryRedeReferenciada()
    planoRepository = new InMemoryPlano()
    hospitalRepository = new InMemoryHospital()

    sut = new RegisterRedeReferenciadaUseCase(redeReferenciadaRepository, planoRepository, hospitalRepository)
  })

  it('should be able to register a rede_referenciada', async () => {

    const plano = planoRepository.create({
      name: 'Plano 01',
      id: 'Plano 01',
      slug: 'plano-01'
    })

    const hospital = hospitalRepository.create({
      bairro: 'Bairro boa viagem',
      cidade: 'Cidade do recife',
      endereco: 'Rua fernando',
      estado: ' PE ',
      razao_social: 'Hospital esperança',
      telefone: '8181818181',
      id: 'Hospital 01'
    })

    const { rede_referenciada } = await sut.execute({
      hospitalId: 'Hospital 01',
      planoId: 'Plano 01'

    })
    expect(rede_referenciada.hospitalId).toEqual('Hospital 01')
  })

  it('should be able to register a rede_referenciada when the hospital or plano does not exists', async () => {

    const plano = planoRepository.create({
      name: 'Plano 01',
      id: 'Plano 01',
      slug: 'plano-01'
    })

    const hospital = hospitalRepository.create({
      bairro: 'Bairro boa viagem',
      cidade: 'Cidade do recife',
      endereco: 'Rua fernando',
      estado: ' PE ',
      razao_social: 'Hospital esperança',
      telefone: '8181818181',
      id: 'Hospital 01'
    })

    await expect(async () => {
      await sut.execute({
        hospitalId: 'Hospital 02',
        planoId: 'Plano 01'
      })
    }).rejects.toBeInstanceOf(HospitalDoesNotExistsError)


    await expect(async () => {
      await sut.execute({
        hospitalId: 'Hospital 01',
        planoId: 'Plano 02'
      })
    }).rejects.toBeInstanceOf(PlanoDoesNotExistsError)
  })
})