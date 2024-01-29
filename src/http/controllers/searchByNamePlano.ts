import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { noPlanoFoundError } from "@/use-cases/errors/no-plano-found-error"
import { SearchByNamePlanoUseCase } from "@/use-cases/plano/searchByName"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function searchByNamePlano(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    query: z.string(),
  })

  const { query } = registerPlanoBodySchema.parse(req.query)



  try {
    const planoRepository = new PrismaPlanoRepository()
    const searchByNameUseCase = new SearchByNamePlanoUseCase(planoRepository)



    const plano = await searchByNameUseCase.execute({
      query
    })



    return res.status(201).send(plano)
  } catch (err) {
    if (err instanceof noPlanoFoundError) {
      return res.status(409).send({ message: err.message })
    }
    return res.status(500).send()
  }




}