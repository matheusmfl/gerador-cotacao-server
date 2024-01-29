import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { PlanoRepository } from "../planoRepository";


export class PrismaPlanoRepository implements PlanoRepository {
  async searchByName(name: string) {
    console.log(name)
    const plano = await prisma.plano.findFirst({
      where: {
        name: {
          contains: name
        }
      }
    })
    return plano
  }

  async create(data: Prisma.PlanoCreateInput) {
    const plano = await prisma.plano.create({ data })

    return plano
  }


}
