import { Prisma, HospitaisPlano } from "@prisma/client";

export interface RedeReferenciadaRepository {
  create(planoId: string, hospitalId: string): Promise<HospitaisPlano>
}