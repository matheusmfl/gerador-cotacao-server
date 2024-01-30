import { InMemoryCorretor } from '@/repositories/in-memory/corretor-in-memory'
import { expect, describe, it } from 'vitest'
import { RegisterCorretorUseCase } from './registerCorretor'

describe('RegisterCorretor UseCase', () => {
  it('should be able to register', async () => {
    const corretorRepository = new InMemoryCorretor
    const registerCorretorUseCase = new RegisterCorretorUseCase(corretorRepository)

    const { user } = await registerCorretorUseCase.execute({
      email: 'jhondoe@email.com',
      name: 'jhonDoe',
      password: '123456'
    })
    expect(user.id).toEqual(expect.any(String))
  })





})