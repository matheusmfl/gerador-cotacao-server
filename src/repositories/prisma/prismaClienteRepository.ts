import { prisma } from "@/lib/prisma";
import { Prisma } from '@prisma/client'

import { ClienteRepository } from "../cliente-repository";


export class PrismaClienteRepository implements ClienteRepository {
  async findByDocumento(documento: string): Promise<{ id: string; nome: string; documento: string; preco: number | null; } | null> {
    const cliente = await prisma.cliente.findFirst({
      where: {
        documento
      }
    })

    if (!cliente) {
      return null
    }

    return cliente
  }
  async findByName(name: string) {
    const clientes = await prisma.cliente.findMany({
      where: {
        nome: name
      }
    })

    if (clientes.length < 1) {
      return null
    }

    return clientes
  }
  async findById(id: string) {
    const cliente = await prisma.cliente.findUnique({
      where: {
        id
      }
    })

    if (!cliente) {
      return null
    }

    return cliente
  }
  async create(data: Prisma.ClienteCreateInput) {
    const cliente = await prisma.cliente.create({ data })

    return cliente
  }


}
