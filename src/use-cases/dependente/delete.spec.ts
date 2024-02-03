import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryDependente } from '@/repositories/in-memory/dependente-in-memory'
import { InMemoryCliente } from '@/repositories/in-memory/cliente-in-memory'
import { DeleteDependenteUseCase } from './delete'

describe('Delete Dependent UseCase', () => {
  let dependenteRepository: InMemoryDependente
  let sut: DeleteDependenteUseCase
  let clienteRepository: InMemoryCliente

  beforeEach(() => {
    dependenteRepository = new InMemoryDependente()
    clienteRepository = new InMemoryCliente()
    sut = new DeleteDependenteUseCase(dependenteRepository, clienteRepository)
  })

  it('should be able to register dependente', async () => {

    clienteRepository.create({
      nome: 'Matheus Fonteles',
      documento: '06965116307',
      id: '01'
    })

    const dependenteCriado = await dependenteRepository.create({
      clienteId: '01', data: {
        idade: 18,
        nome: 'Matheus Fonteles Filho',
        id: '02',
        preco: 1800,
        cliente: {
          connect: {
            id: '01'
          }
        }
      }
    })


    await sut.execute({ clientId: '01', dependentId: '02' })

    const findedDependente = await dependenteRepository.findById('02')


    await expect(findedDependente).toBeNull()
  })

})