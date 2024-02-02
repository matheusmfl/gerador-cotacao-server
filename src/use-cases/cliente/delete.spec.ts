
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { DeleteClienteUseCase } from './delete'

describe('Delete client By ID UseCase', () => {
  let clienteRepository: InMemoryCliente
  let sut: DeleteClienteUseCase

  beforeEach(() => {
    clienteRepository = new InMemoryCliente()
    sut = new DeleteClienteUseCase(clienteRepository)
  })

  it('should be able to delete cliente by id', async () => {

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-1'
    })

    clienteRepository.create({
      documento: '123456',
      nome: 'Matheus Fonteles',
      id: 'cliente-2'
    })


    await sut.execute({
      id: 'cliente-1'
    })

    const deletedCliente = await clienteRepository.findById('cliente-1')
    await expect(deletedCliente).toBeNull()
  })


})