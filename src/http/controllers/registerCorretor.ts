import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function registerCorretor(req: FastifyRequest, res: FastifyReply) {

  const registerBodySchema = z.object({
    name: z.string().min(6),
    email: z.string().email(),
    password: z.string()
  })

  const { name, email, password } = registerBodySchema.parse(req.body)


}