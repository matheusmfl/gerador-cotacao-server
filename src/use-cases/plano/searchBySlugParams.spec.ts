import { expect, describe, it } from 'vitest'
import { RegisterPlanoUseCase } from './registerPlano'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { SearchBySlugParamsUseCase } from './searchBySlugParams'




describe('RegisterPlano UseCase', () => {

  it('should be able to search Plano with a slug', async () => {
    const planoRepository = new InMemoryPlano
    const registerPlanoUseCase = new RegisterPlanoUseCase(planoRepository)
    const searchBySlugParamsUseCase = new SearchBySlugParamsUseCase(planoRepository)

    const slug = 'jhondoe'


    const { plano } = await searchBySlugParamsUseCase.execute({
      slug: slug
    })

    console.log(plano)


    await expect(plano.slug).toEqual(expect.any(String))
  })


})