import { expect, describe, it, beforeEach } from 'vitest'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'

import { notFoundError } from '../errors/not-found-error'
import { FindHospitalByNameUseCase } from './findByName'


describe('Find Hospital by name UseCase', () => {
  let sut: FindHospitalByNameUseCase
  let hospitalRepository: HospitalRepository

  beforeEach(() => {
    hospitalRepository = new InMemoryHospital()
    sut = new FindHospitalByNameUseCase(hospitalRepository)
  })

  it('should be able to find a hospital by id', async () => {

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

    const { hospital } = await sut.execute({ name: 'geral' })
    expect(hospital?.razao_social).toEqual('Hospital geral das clínicas')
  })

  it('should no be able to find a hospital by name when the hospital does not exists', async () => {

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
      await sut.execute({ name: 'name-qualquer' })
    }).rejects.toBeInstanceOf(notFoundError)
  })
})


