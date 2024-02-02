import { Prisma, Cliente } from "@prisma/client";

export interface ClienteRepository {
  create(data: Prisma.ClienteCreateInput): Promise<Cliente>
  findById(id: string): Promise<Cliente | null>
  findByName(name: string): Promise<null | Cliente[]>
  findByDocumento(documento: string): Promise<Cliente | null>
}