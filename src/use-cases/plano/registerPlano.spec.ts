import { expect, describe, it } from 'vitest'
import { RegisterPlanoUseCase } from './registerPlano'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { Slug } from '@/services/slug-generator'


describe('RegisterPlano UseCase', () => {
  const planoRepository = new InMemoryPlano
  const registerPlanoUseCase = new RegisterPlanoUseCase(planoRepository)
  it('should be able to register a plan', async () => {


    const { plano } = await registerPlanoUseCase.execute({
      name: 'jhonDoe',
      slug: 'jhondoe'
    })
    expect(plano.slug).toEqual(expect.any(String))
  })

  it('should be able to generate a slug from the name', async () => {

    const name = 'Bradesco 123'

    const slug = Slug.createFromText(name).value
    const { plano } = await registerPlanoUseCase.execute({
      name,
      slug
    })


    expect(plano.slug).toEqual('bradesco-123')
  })

})