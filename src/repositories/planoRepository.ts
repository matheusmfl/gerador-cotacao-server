import { Prisma, Plano } from "@prisma/client";

export interface PlanoRepository {
  searchByName(name: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>

}