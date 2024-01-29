export class noPlanoFoundError extends Error {
  constructor() {
    super('No plano found')
  }
}