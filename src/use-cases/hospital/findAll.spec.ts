import { expect, describe, it, beforeEach } from 'vitest'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { FindAllHospitalsUseCase } from './findAll'


describe('Find All hospitals UseCase', () => {
  let sut: FindAllHospitalsUseCase
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    hospitalRepository = new InMemoryHospital()
    sut = new FindAllHospitalsUseCase(hospitalRepository)
  })

  it('should be able to find a list of hospitals', async () => {

    hospitalRepository.create({
      razao_social: 'Hospital geral das clínicas',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',
    })

    hospitalRepository.create({
      razao_social: 'Hospital geral das clínicas',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',
    })




    const hospitals = await sut.execute()
    expect(hospitals).toHaveLength(2)
  })

})


