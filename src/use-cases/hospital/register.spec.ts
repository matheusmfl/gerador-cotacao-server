import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterHospitalUseCase } from './register'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { duplicatedItemsError } from '../errors/duplicated-items-error'


describe('RegisterHospital UseCase', () => {
  let sut: RegisterHospitalUseCase
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    hospitalRepository = new InMemoryHospital()
    sut = new RegisterHospitalUseCase(hospitalRepository)
  })

  it('should be able to register a hospital', async () => {

    const { hospital } = await sut.execute({
      razao_social: 'data.razao_social',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',

    })
    expect(hospital?.razao_social).toEqual(expect.any(String))
  })

  it('should not be able to register a hospital with twince name', async () => {

    const { hospital } = await sut.execute({
      razao_social: 'data.razao_social',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',

    })
    await expect(async () => {
      await sut.execute({
        razao_social: 'data.razao_social',
        telefone: 'data.telefone',
        endereco: 'data.endereco',
        cro: ' data.cro ',
        bairro: 'data.bairro',
        cidade: ' data.cidade',
        estado: 'data.estado',
        cep: 'data.cep || null',

      })
    }).rejects.toBeInstanceOf(duplicatedItemsError)
  })
})


