
import { expect, describe, it } from 'vitest'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { CreateClienteUseCase } from './createUseCase'

describe('Create cliente UseCase', () => {
  it('should be able to register a cliente', async () => {
    const clienteRepository = new InMemoryCliente()
    const registerCorretorUseCase = new CreateClienteUseCase(clienteRepository)

    const { cliente } = await registerCorretorUseCase.execute({
      name: 'johnDoe',
      documento: '123456'
    })
    expect(cliente.id).toEqual(expect.any(String))
  })





})