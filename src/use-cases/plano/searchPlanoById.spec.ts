import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { SearchById } from './searchPlanoById'
import { PlanoRepository } from '@/repositories/planoRepository'





describe('Search By SlugParams  UseCase', () => {

  let planoRepository: PlanoRepository
  let sut: SearchById
  beforeEach(() => {
    planoRepository = new InMemoryPlano
    sut = new SearchById(planoRepository)
  })

  it('should be able to search Plano by Id', async () => {



    planoRepository.create({
      id: '1',
      name: 'plano',
      slug: 'plano'
    })




    const { plano } = await sut.execute({
      id: '1'
    })




    await expect(plano.slug).toEqual('plano')
  })


})