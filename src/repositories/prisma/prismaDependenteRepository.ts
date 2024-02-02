import { prisma } from "@/lib/prisma";

import { DependenteRepository, IDependenteCreateProps } from "../dependente-repository";




export class PrismaDependenteRepository implements DependenteRepository {
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
