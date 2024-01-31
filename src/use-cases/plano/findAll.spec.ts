import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { PlanoRepository } from '@/repositories/planoRepository'
import { FindAllPlanosUseCase } from './findAll'



describe('FindAllPlanos Use Case Test', () => {

  let sut: FindAllPlanosUseCase
  let planoRepository: PlanoRepository
  beforeEach(() => {
    planoRepository = new InMemoryPlano()
    sut = new FindAllPlanosUseCase(planoRepository)
  })


  it('should be able to find all plans', async () => {


    planoRepository.create({
      id: '1',
      name: 'Plano 1',
      slug: 'plano-1'
    })

    planoRepository.create({
      id: '2',
      name: 'Plano 1',
      slug: 'plano-2'
    })

    const planos = await sut.execute()

    expect(planos.planos).toHaveLength(2)
  })

})