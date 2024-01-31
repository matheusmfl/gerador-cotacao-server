import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { IFindByIdProps, IUpdatedPlano, PlanoRepository } from "../planoRepository";


export class PrismaPlanoRepository implements PlanoRepository {
  async findById({ id, extraWhere }: IFindByIdProps, args?: Omit<Prisma.PlanoFindUniqueArgs, "where">) {
    const plano = await prisma.plano.findUnique({
      where: { id, ...extraWhere },
      ...args
    })

    return plano
  }
  async deletePlano(id: string): Promise<void> {
    await prisma.plano.delete({
      where: { id }
    })

    return
  }
  async updatePlano({ id, extraWhere }: IUpdatedPlano, args: Omit<Prisma.PlanoUpdateArgs, 'where'>) {
    const updatedPlano = await prisma.plano.update({
      where: { id, ...extraWhere },
      ...args
    });

    return updatedPlano
  }

  async findBySlug(slug: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    const plano = await prisma.plano.findFirst({
      where: { slug }
    })

    return plano
  }





  async create(data: Prisma.PlanoCreateInput) {
    const plano = await prisma.plano.create({ data })

    return plano
  }

}
