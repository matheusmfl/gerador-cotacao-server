import { expect, describe, it, beforeEach } from 'vitest'

import { UpdateDependenteUseCase } from './update'
import { notFoundError } from '../errors/not-found-error'
import { InMemoryDependente } from '@/repositories/in-memory/dependente-in-memory'





describe('Update Dependente useCase', () => {
  let dependenteRepository: InMemoryDependente
  let sut: UpdateDependenteUseCase
  beforeEach(() => {
    dependenteRepository = new InMemoryDependente()
    sut = new UpdateDependenteUseCase(dependenteRepository)
  })

  it('should be able to update dependente data', async () => {


    dependenteRepository.create({
      clienteId: '1',
      data: {
        idade: 18,
        id: '001',
        preco: 1800,
        nome: 'Matheuszin',
        cliente: {
          connect:
            { id: '1' }
        }
      }
    })

    const { dependenteUpdated } = await sut.execute({
      id: '001',
      idade: 22,
      price: 1400,
      name: 'Matheus Fonteles'
    }
    )

    await expect(dependenteUpdated.nome).toEqual('Matheus Fonteles')
  })


  it('should not be able to update hospital when its ID not exists', async () => {






    await expect(async () => {
      await sut.execute({ id: 'unexistent-id', name: 'Matheuszão', price: 1800, idade: 22 })
    }).rejects.toBeInstanceOf(notFoundError)
  })


})