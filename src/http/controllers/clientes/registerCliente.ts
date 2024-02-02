import { duplicatedItemsError } from "@/use-cases/errors/duplicated-items-error"
import { makeRegisterCliente } from "@/use-cases/factories/clientes/make-register-clientes"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function registerCliente(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    name: z.string().min(3),
    documento: z.string().min(5),
  })



  const { name, documento } = registerPlanoBodySchema.parse(req.body)



  try {
    const registerClienteUseCase = makeRegisterCliente()




    const cliente = await registerClienteUseCase.execute({
      documento,
      name
    })

    return res.status(200).send({
      cliente
    })


  } catch (err) {
    if (err instanceof duplicatedItemsError) {
      return res.status(409).send({ message: err.message });
    }
  }

}