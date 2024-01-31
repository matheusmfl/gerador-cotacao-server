import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterPlanoUseCase } from './registerPlano'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { Slug } from '@/services/slug-generator'
import { planoAlreadyExistsError } from '../errors/plano-already-exists-error'
import { PlanoRepository } from '@/repositories/planoRepository'


describe('RegisterPlano UseCase', () => {
  let sut: RegisterPlanoUseCase
  let planoRepository: PlanoRepository

  beforeEach(() => {
    planoRepository = new InMemoryPlano()
    sut = new RegisterPlanoUseCase(planoRepository)
  })

  it('should be able to register a plan', async () => {


    const { plano } = await sut.execute({
      name: 'jhonDoe',
      slug: 'jhondoe'

    })
    expect(plano.slug).toEqual(expect.any(String))
  })

  it('should be able to generate a slug from the name', async () => {
    const planoRepository = new InMemoryPlano()
    const sut = new RegisterPlanoUseCase(planoRepository)

    const name = 'Bradesco 123'

    const slug = Slug.createFromText(name).value
    const { plano } = await sut.execute({
      name,
      slug
    })


    expect(plano.slug).toEqual('bradesco-123')
  })


  it('should not be able to register with a same slug twice', async () => {

    const name = 'Bradesco 23'

    const slug = Slug.createFromText(name).value

    await planoRepository.create({
      name,
      slug
    })


    await expect(() =>

      sut.execute({
        name,
        slug
      })

    ).rejects.toBeInstanceOf(planoAlreadyExistsError)
  })

})