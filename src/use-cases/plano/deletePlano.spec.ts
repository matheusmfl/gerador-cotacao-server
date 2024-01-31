import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPlano } from '@/repositories/in-memory/plano-in-memory'
import { DeletePlano } from './deletePlano'
import { PlanoRepository } from '@/repositories/planoRepository'



describe('DeletePlano UseCase', () => {

  let sut: DeletePlano
  let planoRepository: PlanoRepository
  beforeEach(() => {
    planoRepository = new InMemoryPlano()
    sut = new DeletePlano(planoRepository)
  })


  it('should be able to delete a plan', async () => {


    planoRepository.create({
      id: '1',
      name: 'Plano 1',
      slug: 'plano-1'
    })

    await sut.execute({ id: '1' })
    const deletedPlan = await planoRepository.findById({ id: '1' }, {});
    expect(deletedPlan).toBe(null)
  })

})