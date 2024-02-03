import { Dependente } from "@prisma/client";
import { DependenteRepository, IDependenteCreateProps } from "../dependente-repository";
import { InMemoryCliente } from "./cliente-in-memory";

export class InMemoryDependente implements DependenteRepository {




  public items: Dependente[] = []
  public inMemoryCliente: InMemoryCliente = new InMemoryCliente()

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