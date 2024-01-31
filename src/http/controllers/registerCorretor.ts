import { makeRegisterCorretor } from "@/use-cases/factories/make-register-corretor-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function registerCorretor(req: FastifyRequest, res: FastifyReply) {

  const registerBodySchema = z.object({
    name: z.string().min(6),
    email: z.string().email(),
    password: z.string()
  })

  const { name, email, password } = registerBodySchema.parse(req.body)

  try {

    const registerCorretorUseCase = makeRegisterCorretor()

    await registerCorretorUseCase.execute({
      name, email, password
    })

  } catch (err) {
    throw err

  }

  return res.status(201).send()

}