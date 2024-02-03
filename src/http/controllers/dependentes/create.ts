import { notFoundError } from "@/use-cases/errors/not-found-error"
import { makeRegisterDependente } from "@/use-cases/factories/dependentes/make-register-dependentes"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function createDependentesController(req: FastifyRequest, res: FastifyReply) {

  const registerDependenteBodySchema = z.object({
    name: z.string().min(3),
    idade: z.number(),
    preco: z.number()
  })

  const clienteIdParamsSchema = z.object({
    clienteId: z.string()
  })

  console.log


  const { name, idade, preco } = registerDependenteBodySchema.parse(req.body)

  const { clienteId } = clienteIdParamsSchema.parse(req.params)



  try {

    console.log(clienteId)
    const registerDependenteUseCase = makeRegisterDependente()




    const dependente = await registerDependenteUseCase.execute({
      clienteId,
      data: {
        nome: name,
        preco,
        idade,
        cliente: {
          connect: {
            id: clienteId
          }
        }
      }
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