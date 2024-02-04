export class PlanoDoesNotExistsError extends Error {
  constructor() {
    super('Plano não encontrando')
  }
}