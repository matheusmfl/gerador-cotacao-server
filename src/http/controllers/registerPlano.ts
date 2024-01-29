import { PrismaPlanoRepository } from "@/repositories/prisma/prismaPlanoRepository"
import { Slug } from "@/services/slug-generator"
import { RegisterPlanoUseCase } from "@/use-cases/plano/registerPlano"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function registerPlano(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    name: z.string().min(3),
  })



  const { name } = registerPlanoBodySchema.parse(req.body)



  try {

    const planoRepository = new PrismaPlanoRepository()
    const registerPlanoUseCase = new RegisterPlanoUseCase(planoRepository)

    const slug = Slug.createFromText(name)
    console.log(slug)

    await registerPlanoUseCase.execute({
      name,
      slug: slug.value
    })
  } catch (err) {
    throw err
  }

  return res.status(201).send()

}