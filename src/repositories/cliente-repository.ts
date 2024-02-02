import { Prisma, Cliente } from "@prisma/client";

export interface IUpdateCliente {

  id: string
  extraWhere?: Omit<Prisma.ClienteWhereUniqueInput, 'id'>

}

export interface ClienteRepository {
  create(data: Prisma.ClienteCreateInput): Promise<Cliente>
  findById(id: string): Promise<Cliente | null>
  findByName(name: string): Promise<null | Cliente[]>
  findByDocumento(documento: string): Promise<Cliente | null>
  update(props: IUpdateCliente, args: Omit<Prisma.ClienteUpdateArgs, 'where'>): Promise<Cliente>
}