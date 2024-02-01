import { Hospital, Prisma } from "@prisma/client";

export interface HospitalRepository {
  create(data: Prisma.HospitalCreateInput): Promise<Hospital | null>
  findById(id: string): Promise<Hospital | null>
  findByName(name: string): Promise<Hospital | null>
}