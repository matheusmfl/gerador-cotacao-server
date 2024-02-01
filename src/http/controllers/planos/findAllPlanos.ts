import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeFindAllPlanos } from "@/use-cases/factories/make-search-all-planos"


import { FastifyReply, FastifyRequest } from "fastify"




export async function FindAllPlanos(req: FastifyRequest, res: FastifyReply) {

  try {

    const findAll = makeFindAllPlanos()

    const plano = await findAll.execute()

    return res.status(200).send(plano)
  } catch (err) {
    if (err instanceof notFoundError) {
      return res.status(409).send({ message: err.message })
    }
    console.error(err)
    return res.status(500).send()
  }




}