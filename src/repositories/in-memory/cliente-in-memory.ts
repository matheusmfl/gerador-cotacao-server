import { Cliente, Prisma } from "@prisma/client";
import { ClienteRepository, IUpdateCliente } from "../cliente-repository";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class InMemoryCliente implements ClienteRepository {

  public items: Cliente[] = []

  async update(props: IUpdateCliente, args: Omit<Prisma.ClienteUpdateArgs<DefaultArgs>, "where">): Promise<{ id: string; nome: string; documento: string; preco: number | null; }> {
    const index = await this.items.findIndex((item) => item.id === props.id)

    let cliente = this.items[index]


    cliente = {
      id: props.id || 'cliente-1',
      nome: args.data.nome as string,
      documento: args.data.documento as string,
      preco: args.data.preco as number | null
    }

    return cliente
  }


  async findByDocumento(documento: string): Promise<{ id: string; nome: string; documento: string; preco: number | null; } | null> {
    const cliente = await this.items.find(item => item.documento === documento)
    if (!cliente) {
      return null
    }
    return cliente
  }

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