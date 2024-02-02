import { Dependente } from "@prisma/client";
import { DependenteRepository, IDependenteCreateProps } from "../dependente-repository";
import { InMemoryCliente } from "./cliente-in-memory";

export class InMemoryDependente implements DependenteRepository {


  public items: Dependente[] = []
  public inMemoryCliente: InMemoryCliente = new InMemoryCliente()

  async create({ clienteId, data }: IDependenteCreateProps) {

    const dependente: Dependente = {
      clienteId,
      id: 'dependente-1',
      idade: data.idade,
      nome: data.nome,
      preco: data.preco ?? null
    }

    this.items.push(dependente)



    return dependente

  }

}