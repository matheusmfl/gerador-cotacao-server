import { Slug } from "@/services/slug-generator"
import { planoAlreadyExistsError } from "@/use-cases/errors/plano-already-exists-error"
import { makerRegisterPlano } from "@/use-cases/factories/make-register-plano-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function registerPlano(req: FastifyRequest, res: FastifyReply) {

  const registerPlanoBodySchema = z.object({
    name: z.string().min(3),
  })



  const { name } = registerPlanoBodySchema.parse(req.body)



  try {
    const registerPlanoUseCase = makerRegisterPlano()

    const slug = Slug.createFromText(name)


    await registerPlanoUseCase.execute({
      name,
      slug: slug.value
    })


  } catch (err) {
    if (err instanceof planoAlreadyExistsError) {
      return res.status(409).send({ message: err.message });
    }
  }

  return res.status(201).send()

}