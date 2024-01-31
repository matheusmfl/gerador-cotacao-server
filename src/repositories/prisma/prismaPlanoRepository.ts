import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { IUpdatedPlano, PlanoRepository } from "../planoRepository";
import { DefaultArgs } from "@prisma/client/runtime/library";


export class PrismaPlanoRepository implements PlanoRepository {
  async deletePlano(id: string): Promise<void> {
    await prisma.plano.delete({
      where: { id }
    })

    return
  }
  async updatePlano(props: IUpdatedPlano, args: Prisma.PlanoUpdateArgs<DefaultArgs>): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; }> {
    const updatedPlano = await prisma.plano.update({
      where: { id: props.id },
      data: {
        name: args.data.name,
        slug: args.data.slug,
      },
    });

    return updatedPlano
  }

  async findBySlug(slug: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    const plano = await prisma.plano.findFirst({
      where: { slug }
    })

    return plano
  }



  async searchPlanoById(slug: string) {

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
