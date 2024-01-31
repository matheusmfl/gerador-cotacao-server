import { makeDeletePlanoUseCase } from "@/use-cases/factories/make-delete-plano"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function deletePlano(req: FastifyRequest, res: FastifyReply) {


  const deletePlanoParamsSchema = z.object({
    id: z.string()
  })



  try {

    const { id } = deletePlanoParamsSchema.parse(req.params)
    const deletePlanoUseCase = makeDeletePlanoUseCase()

    await deletePlanoUseCase.execute({
      id
    })

  } catch (err) {
    throw err

  }

  return res.status(200).send()

}