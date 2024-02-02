import { Prisma, Cliente } from "@prisma/client";

export interface ClienteRepository {
  create(data: Prisma.ClienteCreateInput): Promise<Cliente>
}