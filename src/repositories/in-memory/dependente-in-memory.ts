import { Dependente, Prisma } from "@prisma/client";
import { DependenteRepository, IDependenteCreateProps, IUpdatedDependente } from "../dependente-repository";
import { InMemoryCliente } from "./cliente-in-memory";
import { randomUUID } from "crypto";

export class InMemoryDependente implements DependenteRepository {

  public items: Dependente[] = []
  public inMemoryCliente: InMemoryCliente = new InMemoryCliente()

  async update(props: IUpdatedDependente, args: Prisma.DependenteUpdateArgs) {

    const index = await this.items.findIndex((item) => item.id === props.id)

    let dependente = this.items[index]


    dependente = {
      clienteId: args.data.clienteId as string,
      id: props.id ?? randomUUID(),
      nome: args.data.nome as string,
      idade: args.data.idade as number,
      preco: args.data.preco as number
    }

    return dependente
  }

  async delete(clientId: string, dependentId: string): Promise<void> {
    const dependente = this.items.findIndex(item => item.id === dependentId);

    await this.items.splice(dependente, 1)

    return
  }

  async findById(dependentId: string): Promise<{ id: string; nome: string; idade: number; preco: number | null; clienteId: string; } | null> {
    const dependente = this.items.find(item => item.id === dependentId)


    if (!dependente) {

      return null
    }



    return dependente

  }

  async create({ clienteId, data }: IDependenteCreateProps) {

    const dependente: Dependente = {
      clienteId,
      id: data.id ?? 'dependente-1',
      idade: data.idade,
      nome: data.nome,
      preco: data.preco ?? null
    }

    this.items.push(dependente)



    return dependente

  }

}