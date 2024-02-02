
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { notFoundError } from '../errors/not-found-error'
import { FindClienteByDocumentoUseCase } from './findByDocument'

describe('Find Client By Document UseCase', () => {
  let clienteRepository: InMemoryCliente
  let sut: FindClienteByDocumentoUseCase

  beforeEach(() => {
    clienteRepository = new InMemoryCliente()
    sut = new FindClienteByDocumentoUseCase(clienteRepository)
  })

  it('should be able to find cliente by documento', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })


    const { cliente } = await sut.execute({
      documento: '123456'
    })
    expect(cliente.documento).toEqual('123456')
  })

  it('should not be able to find cliente by document when client does not exists', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })


    await expect(async () => {
      await sut.execute({
        documento: 'cliente-2'
      })
    }).rejects.toBeInstanceOf(notFoundError)
  })

})