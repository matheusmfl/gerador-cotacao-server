import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeUpdatePlanoUseCase } from "@/use-cases/factories/make-update-plano"

import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function updatePlano(req: FastifyRequest, res: FastifyReply) {

  const idPlanoBodySchema = z.object({
    id: z.string(),

  })

  const namePlanoBodySchema = z.object({
    name: z.string(),

  })


  try {



    const { id } = idPlanoBodySchema.parse(req.params)

    const { name } = namePlanoBodySchema.parse(req.body)


    const updatePlanoUseCase = makeUpdatePlanoUseCase()


    const plano = await updatePlanoUseCase.execute({
      name,
      id
    })


    return res.status(200).send(plano)

  } catch (err) {
    if (err instanceof notFoundError) {
      return res.status(409).send({ message: err.message })
    }
    console.log(err)
    return res.status(500).send()
  }
}