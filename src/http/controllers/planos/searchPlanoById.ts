import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeSearchById } from "@/use-cases/factories/make-search-by-slug-plano"

import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function SearchById(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    id: z.string(),
  })

  const { id } = registerPlanoBodySchema.parse(req.params)




  try {

    const searchById = makeSearchById()



    const plano = await searchById.execute({
      id
    })




    return res.status(201).send(plano)
  } catch (err) {
    if (err instanceof notFoundError) {
      return res.status(409).send({ message: err.message })
    }
    return res.status(500).send()
  }




}