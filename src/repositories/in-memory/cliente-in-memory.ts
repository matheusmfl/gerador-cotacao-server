import { Cliente, Prisma } from "@prisma/client";
import { ClienteRepository } from "../cliente-repository";

export class InMemoryCliente implements ClienteRepository {



  public items: Cliente[] = []

  async findByName(name: string) {
    const clientes = this.items.filter(cliente => cliente.nome === name)
    if (clientes.length < 1) {
      return null
    }

    return clientes
  }

  async findById(id: string) {
    const cliente = this.items.find(item => item.id === id)
    if (!cliente) {
      return null
    }

    return cliente
  }

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