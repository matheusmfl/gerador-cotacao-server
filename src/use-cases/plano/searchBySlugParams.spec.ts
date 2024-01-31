import { expect, describe, it } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { SearchBySlugParamsUseCase } from './searchBySlugParams'




describe('Search By SlugParams  UseCase', () => {

  it('should be able to search Plano with a slug', async () => {
    const planoRepository = new InMemoryPlano
    const sut = new SearchBySlugParamsUseCase(planoRepository)


    planoRepository.create({
      name: 'plano',
      slug: 'plano'
    })

    const slug = 'plano'


    const { plano } = await sut.execute({
      slug: slug
    })



    await expect(plano.slug).toEqual(expect.any(String))
  })


})