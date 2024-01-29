import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { SearchByNamePlanoUseCase } from "@/use-cases/plano/searchByName"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"



export async function searchByNamePlano(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    name: z.string(),
  })

  const { name } = registerPlanoBodySchema.parse(req.query)
  console.log(name)

  try {
    const planoRepository = new PrismaPlanoRepository()
    const searchByNameUseCase = new SearchByNamePlanoUseCase(planoRepository)



    const plano = await searchByNameUseCase.execute({
      name
    })

    return res.status(201).send(plano)
  } catch (err) {
    console.error(err)
  }

  return res.status(201).send()

}