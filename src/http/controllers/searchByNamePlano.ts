import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { SearchByNamePlanoUseCase } from "@/use-cases/plano/searchByName"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function searchByNamePlano(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    query: z.string().min(3),
  })

  const { query } = registerPlanoBodySchema.parse(req.body)

  try {
    const planoRepository = new PrismaPlanoRepository()
    const searchByNameUseCase = new SearchByNamePlanoUseCase(planoRepository)

    await searchByNameUseCase.execute({
      query
    })
  } catch (err) {
    throw err
  }

  return res.status(201).send()

}