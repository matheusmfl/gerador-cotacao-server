import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { noPlanoFoundError } from "@/use-cases/errors/no-plano-found-error"
import { SearchBySlugParamsUseCase } from "@/use-cases/plano/searchBySlugParams"

import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function searchBySlugParams(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    slug: z.string(),
  })

  const { slug } = registerPlanoBodySchema.parse(req.params)



  try {
    const planoRepository = new PrismaPlanoRepository()
    const searchByNameUseCase = new SearchBySlugParamsUseCase(planoRepository)



    const plano = await searchByNameUseCase.execute({
      slug
    })



    return res.status(201).send(plano)
  } catch (err) {
    if (err instanceof noPlanoFoundError) {
      return res.status(409).send({ message: err.message })
    }
    return res.status(500).send()
  }




}