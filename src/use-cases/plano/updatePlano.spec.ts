import { expect, describe, it } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { UpdatePlanoUseCase } from './updatePlano'





describe('Update by updatePlanoUseCase', () => {

  it('should be able to update plano passing the slug', async () => {
    const planoRepository = new InMemoryPlano
    const sut = new UpdatePlanoUseCase(planoRepository)

    planoRepository.create({
      id: '1',
      name: 'plano 1',
      slug: 'plano-1',

    })

    const plano = await sut.execute({
      id: '1',
      name: 'teste'
    }
    )

    await expect(plano.slug).toEqual('teste')
  })


})