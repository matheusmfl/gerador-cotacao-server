import { Cliente, Prisma } from "@prisma/client";
import { ClienteRepository } from "../cliente-repository";

export class InMemoryCliente implements ClienteRepository {

  public items: Cliente[] = []

  async create(data: Prisma.ClienteCreateInput) {
    const cliente: Cliente = {
      id: data.id ?? 'cliente-1',
      nome: data.nome,
      documento: data.documento,
      preco: data.preco ? 1200 : null
    }

    await this.items.push(cliente)

    return cliente

  }

}