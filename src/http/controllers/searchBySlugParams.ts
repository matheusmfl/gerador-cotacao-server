import { noPlanoFoundError } from "@/use-cases/errors/no-plano-found-error"
import { makeSearchBySlugPlano } from "@/use-cases/factories/make-search-by-slug-plano"

import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function searchPlanoById(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    id: z.string(),
  })

  const { id } = registerPlanoBodySchema.parse(req.params)



  try {

    const searchBySlugUseCase = makeSearchBySlugPlano()



    const plano = await searchBySlugUseCase.execute({
      id
    })



    return res.status(201).send(plano)
  } catch (err) {
    if (err instanceof noPlanoFoundError) {
      return res.status(409).send({ message: err.message })
    }
    return res.status(500).send()
  }




}