
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { FindClienteByIdUseCase } from './findById'
import { notFoundError } from '../errors/not-found-error'

describe('Find Client By ID UseCase', () => {
  let clienteRepository: InMemoryCliente
  let sut: FindClienteByIdUseCase

  beforeEach(() => {
    clienteRepository = new InMemoryCliente()
    sut = new FindClienteByIdUseCase(clienteRepository)
  })

  it('should be able to find cliente by id', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })


    const { cliente } = await sut.execute({
      id: 'cliente-1'
    })
    expect(cliente.id).toEqual('cliente-1')
  })

  it('should not be able to find cliente by id when client does not exists', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })


    const { cliente } = await sut.execute({
      id: 'cliente-1'
    })
    await expect(async () => {
      await sut.execute({
        id: 'cliente-2'
      })
    }).rejects.toBeInstanceOf(notFoundError)
  })

})