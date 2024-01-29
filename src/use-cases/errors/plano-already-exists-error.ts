export class planoAlreadyExistsError extends Error {
  constructor() {
    super('O Plano já existe!')
  }
}