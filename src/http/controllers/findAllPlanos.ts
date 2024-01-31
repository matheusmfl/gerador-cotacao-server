import { noPlanoFoundError } from "@/use-cases/errors/no-plano-found-error"
import { makeFindAllPlanos } from "@/use-cases/factories/make-search-all-planos"


import { FastifyReply, FastifyRequest } from "fastify"




export async function FindAllPlanos(req: FastifyRequest, res: FastifyReply) {

  try {

    const findAll = makeFindAllPlanos()

    const plano = await findAll.execute()

    return res.status(200).send(plano)
  } catch (err) {
    if (err instanceof noPlanoFoundError) {
      return res.status(409).send({ message: err.message })
    }
    console.error(err)
    return res.status(500).send()
  }




}