import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { PlanoRepository } from "../planoRepository";


export class PrismaPlanoRepository implements PlanoRepository {
  async findBySlug(slug: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    const plano = await prisma.plano.findFirst({
      where: { slug }
    })

    return plano
  }

  async searchByQueryName(query: string) {
    console.log(query)
    const plano = await prisma.plano.findFirst({
      where: { slug: query }
    })
    return plano
  }

  async create(data: Prisma.PlanoCreateInput) {
    const plano = await prisma.plano.create({ data })

    return plano
  }




}
