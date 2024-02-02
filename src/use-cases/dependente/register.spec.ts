import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterDependenteUseCase } from './register'
import { InMemoryDependente } from '@/repositories/in-memory/dependente-in-memory'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'

describe('RegisterCorretor UseCase', () => {
  let dependenteRepository: InMemoryDependente
  let sut: RegisterDependenteUseCase
  let clienteRepository: InMemoryCliente

  beforeEach(() => {
    dependenteRepository = new InMemoryDependente()
    clienteRepository = new InMemoryCliente()
    sut = new RegisterDependenteUseCase(dependenteRepository, clienteRepository)
  })

  it('should be able to register dependente', async () => {

    clienteRepository.create({
      nome: 'Matheus Fonteles',
      documento: '06965116307',
      id: '01'
    })

    const dependente = await sut.execute({
      clienteId: '01', data: {
        id: 'dependente-1',
        nome: 'Filho matheus',
        idade: 18,
        preco: 4000,
        cliente: {
          connect: {
            id: '01'
          }
        }
      }
    })

    await expect(dependente.dependente.id).toEqual('dependente-1')
  })





})