import { Prisma, Plano } from "@prisma/client";

export interface PlanoRepository {
  searchByQueryName(query: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>

}