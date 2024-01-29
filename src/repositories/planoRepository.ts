import { Prisma, Plano } from "@prisma/client";

export interface PlanoRepository {
  searchBySlugParams(slug: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>
  findBySlug(slug: string): Promise<Plano | null>

}