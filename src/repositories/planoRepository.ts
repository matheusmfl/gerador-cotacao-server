import { Prisma, Plano } from "@prisma/client";

export interface PlanoRepository {
  create(data: Prisma.PlanoCreateInput): Promise<Plano>
}