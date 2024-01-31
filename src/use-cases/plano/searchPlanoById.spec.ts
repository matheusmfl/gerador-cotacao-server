import { expect, describe, it } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { SearchPlanoByIdUseCase } from './searchPlanoById'




describe('Search By SlugParams  UseCase', () => {

  it('should be able to search Plano by Id', async () => {
    const planoRepository = new InMemoryPlano
    const sut = new SearchPlanoByIdUseCase(planoRepository)


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