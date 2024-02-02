import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'

import { ClienteRepository } from "../cliente-repository";


export class PrismaClienteRepository implements ClienteRepository {
  async create(data: Prisma.ClienteCreateInput) {
    const cliente = await prisma.cliente.create({ data })

    return cliente
  }


}
