import { Prisma, Plano } from "@prisma/client";

export interface PlanoRepository {
  searchByName(query: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>

}