import { prisma } from "@/lib/prisma";

import { DependenteRepository, IDependenteCreateProps } from "../dependente-repository";




export class PrismaDependenteRepository implements DependenteRepository {
  async delete(clientId: string, dependentId: string): Promise<void> {
    await prisma.dependente.delete({
      where: { id: clientId }
    })

    return
  }
  async findById(clientId: string): Promise<{ id: string; nome: string; idade: number; preco: number | null; clienteId: string; } | null> {
    const dependente = await prisma.dependente.findUnique({
      where: { id: clientId }
    })

    if (!dependente) {
      return null
    }

    return dependente
  }
  async create({ clienteId, data }: IDependenteCreateProps): Promise<{ id: string; nome: string; idade: number; preco: number | null; clienteId: string; }> {
    const dependente = await prisma.dependente.create({
      data: {
        idade: data.idade,
        nome: data.nome,
        cliente: {
          connect: {
            id: clienteId
          }
        }
      }
    })

    return dependente
  }



}
