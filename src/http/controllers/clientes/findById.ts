
import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeFindByIdClientes } from "@/use-cases/factories/clientes/make-find-by-id"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function findClienteById(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    id: z.string().min(3),
  })



  const { id } = registerPlanoBodySchema.parse(req.params)



  try {
    const findByIdClienteUseCase = makeFindByIdClientes()




    const cliente = await findByIdClienteUseCase.execute({
      id
    })

    return res.status(200).send({
      cliente
    })


  } catch (error) {
    if (error instanceof notFoundError) {
      return res.status(404).send({ message: error.message });
    }

    return res.status(500).send({ message: error })
  }

}