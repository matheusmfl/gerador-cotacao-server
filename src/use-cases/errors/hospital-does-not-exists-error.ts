export class HospitalDoesNotExistsError extends Error {
  constructor() {
    super('Hospital não encontrado')
  }
}