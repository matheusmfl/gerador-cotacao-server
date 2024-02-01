import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeDeletePlanoUseCase } from "@/use-cases/factories/make-delete-plano"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function deletePlano(req: FastifyRequest, res: FastifyReply) {


  const deletePlanoParamsSchema = z.object({
    id: z.string()
  })
  const { id } = deletePlanoParamsSchema.parse(req.params)
  console.log(id)
  console.log("OLAA")



  try {


    const deletePlanoUseCase = makeDeletePlanoUseCase()

    await deletePlanoUseCase.execute({
      id
    })

  } catch (err) {
    if (err instanceof notFoundError) {
      return res.status(404).send({ message: err.message })
    }
    return res.status(500).send()

  }

  return res.status(200).send()

}