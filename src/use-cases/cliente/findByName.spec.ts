
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { notFoundError } from '../errors/not-found-error'
import { FindClienteByNameUseCase } from './findByName'

describe('Find Client By ID UseCase', () => {
  let clienteRepository: InMemoryCliente
  let sut: FindClienteByNameUseCase

  beforeEach(() => {
    clienteRepository = new InMemoryCliente()
    sut = new FindClienteByNameUseCase(clienteRepository)
  })

  it('should be able to find clientes by name', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })

    clienteRepository.create({
      documento: '123456312',
      nome: 'Matheus Fonteles',
      id: 'cliente-2'
    })


    const clientes = await sut.execute({
      name: 'Matheus Fonteles'
    })

    expect(clientes).toHaveLength(2)
  })

  it('should not be able to find cliente by name when client does not exists', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })


    await expect(async () => {
      const cliente = await sut.execute({
        name: 'Nome qualquer'
      })


    }).rejects.toBeInstanceOf(notFoundError)
  })

})