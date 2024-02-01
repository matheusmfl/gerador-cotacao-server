import { expect, describe, it, beforeEach } from 'vitest'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { FindHospitalByIdUseCase } from './findById'
import { notFoundError } from '../errors/not-found-error'


describe('Find Hospital by id UseCase', () => {
  let sut: FindHospitalByIdUseCase
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    hospitalRepository = new InMemoryHospital()
    sut = new FindHospitalByIdUseCase(hospitalRepository)
  })

  it('should be able to find a hospital by id', async () => {

    hospitalRepository.create({
      id: '1',
      razao_social: 'data.razao_social',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',
    })

    const { hospital } = await sut.execute({ id: '1' })
    expect(hospital?.razao_social).toEqual('data.razao_social')
  })

  it('should no be able to find a hospital by id when the hospital does not exists', async () => {

    hospitalRepository.create({
      id: '1',
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
      await sut.execute({ id: '2' })
    }).rejects.toBeInstanceOf(notFoundError)
  })
})


