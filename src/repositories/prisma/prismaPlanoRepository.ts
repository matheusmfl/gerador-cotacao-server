import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { PlanoRepository } from "../planoRepository";


export class PrismaPlanoRepository implements PlanoRepository {
  async create(data: Prisma.PlanoCreateInput) {
    const plano = await prisma.plano.create({ data })

    return plano
  }


}
