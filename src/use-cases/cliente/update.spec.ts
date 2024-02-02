import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { UpdateClienteUseCase } from './update'
import { notFoundError } from '../errors/not-found-error'





describe('Update by updatePlanoUseCase', () => {
  let clientRepository: InMemoryCliente
  let sut: UpdateClienteUseCase
  beforeEach(() => {
    clientRepository = new InMemoryCliente()
    sut = new UpdateClienteUseCase(clientRepository)
  })


  it('should be able to update client passing the id', async () => {

    clientRepository.create({
      id: '1',
      nome: 'cliente 1',
      documento: '000000',
    })

    const clienteUpdated = await sut.execute({
      id: '1',
      name: 'Matheus Lima',
      documento: '069651163'
    },
    )

    await expect(clienteUpdated.clienteUpdated.nome).toEqual('Matheus Lima')
  })

  it('should not be able to update client when the client does not exists', async () => {

    clientRepository.create({
      id: '1',
      nome: 'cliente 1',
      documento: '000000',
    })

    const clienteUpdated = await sut.execute({
      id: '1',
      name: 'Matheus Lima',
      documento: '069651163'
    },
    )

    await expect(async () => {
      await sut.execute({
        id: 'id-falso',
        name: 'Matheus Lima',
        documento: '069651163'
      })
    }).rejects.toBeInstanceOf(notFoundError)
  })
})


