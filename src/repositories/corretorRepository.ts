import { Prisma, Corretor } from "@prisma/client";

export interface CorretorRepository {
  create(data: Prisma.CorretorCreateInput): Promise<Corretor>
}