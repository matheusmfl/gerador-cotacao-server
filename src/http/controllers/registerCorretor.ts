import { PrismaCorretorRepository } from "@/repositories/prisma/prismaCorretorRepository"
import { RegisterCorretorUseCase } from "@/use-cases/corretor/registerCorretor"
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
    const corretorRepository = new PrismaCorretorRepository()
    const registerCorretorUseCase = new RegisterCorretorUseCase(corretorRepository)

    await registerCorretorUseCase.execute({
      name, email, password
    })

  } catch (err) {
    throw err

  }

  return res.status(201).send()

}