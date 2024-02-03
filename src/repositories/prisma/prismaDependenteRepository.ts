import { prisma } from "@/lib/prisma";

import { DependenteRepository, IDependenteCreateProps, IUpdatedDependente } from "../dependente-repository";
import { Prisma } from "@prisma/client";




export class PrismaDependenteRepository implements DependenteRepository {
  async update({ id, extraWhere }: IUpdatedDependente, args: Omit<Prisma.DependenteUpdateArgs, 'where'>) {

    const updatedDependente = await prisma.dependente.update({
      where: { id, ...extraWhere },
      ...args
    });

    return updatedDependente
  }


  async delete(clientId: string, dependentId: string): Promise<void> {
    await prisma.dependente.delete({
      where: { id: clientId }
    })

    return
  }
  async findById(dependenteId: string): Promise<{ id: string; nome: string; idade: number; preco: number | null; clienteId: string; } | null> {
    const dependente = await prisma.dependente.findUnique({
      where: { id: dependenteId }
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
