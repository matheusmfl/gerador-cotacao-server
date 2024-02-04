import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeUpdateDependente } from "@/use-cases/factories/dependentes/make-update-dependentes"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function updateDependentesController(req: FastifyRequest, res: FastifyReply) {

  const registerDependenteBodySchema = z.object({
    name: z.string().min(3).optional(),
    idade: z.number().optional(),
    price: z.number().optional()
  })

  const clienteIdParamsSchema = z.object({
    id: z.string()
  })



  const { name, idade, price } = registerDependenteBodySchema.parse(req.body)

  const { id } = clienteIdParamsSchema.parse(req.params)



  try {

    const updateDependenteUseCase = makeUpdateDependente()



    const dependente = await updateDependenteUseCase.execute({
      id, idade, price, name
    })

    return res.status(201).send({
      dependente
    })


  } catch (err) {
    if (err instanceof notFoundError) {
      return res.status(409).send({ message: err.message });
    }
  }

}