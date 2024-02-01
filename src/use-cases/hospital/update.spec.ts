import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'
import { UpdateHospitalUseCase } from './update'
import { notFoundError } from '../errors/not-found-error'





describe('Update hospital useCase', () => {
  let hospitalRepository: InMemoryHospital
  let sut: UpdateHospitalUseCase
  beforeEach(() => {
    hospitalRepository = new InMemoryHospital
    sut = new UpdateHospitalUseCase(hospitalRepository)
  })

  it('should be able to update hospital data', async () => {


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

    const hospital = await sut.execute({
      id: '1',
      bairro: 'boa viagem'
    }
    )

    await expect(hospital.bairro).toEqual('boa viagem')
  })


  it('should be able to update hospital when its ID not exists', async () => {


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