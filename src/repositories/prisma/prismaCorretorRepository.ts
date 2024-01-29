import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'
import { CorretorRepository } from "../corretorRepository";


export class PrismaCorretorRepository implements CorretorRepository {
  async create(data: Prisma.CorretorCreateInput) {
    const corretor = await prisma.corretor.create({ data })

    return corretor
  }


}
