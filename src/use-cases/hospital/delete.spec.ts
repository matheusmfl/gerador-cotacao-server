import { expect, describe, it, beforeEach } from 'vitest'
import { DeleteHospitalUseCase } from './delete'
import { HospitalRepository } from '@/repositories/hospital-repository'
import { InMemoryHospital } from '@/repositories/in-memory/hospital-in-memory'



describe('Delete Hospital UseCase', () => {

  let sut: DeleteHospitalUseCase
  let hospitalRepository: HospitalRepository
  beforeEach(() => {
    hospitalRepository = new InMemoryHospital()
    sut = new DeleteHospitalUseCase(hospitalRepository)
  })


  it('should be able to delete a plan', async () => {


    hospitalRepository.create({
      id: '1',
      razao_social: 'data.razao_social',
      telefone: 'data.telefone',
      endereco: 'data.endereco',
      cro: ' data.cro ',
      bairro: 'data.bairro',
      cidade: ' data.cidade',
      estado: 'data.estado',
      cep: 'data.cep || null',
    })

    await sut.execute({ id: '1' })
    const deletedPlan = await hospitalRepository.findById('1');
    expect(deletedPlan).toBe(null)
  })

})