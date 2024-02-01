import { Hospital, Prisma } from "@prisma/client";

export interface IUpdateHospital {
  id: string
  extraWhere?: Omit<Prisma.HospitalWhereUniqueInput, 'id'>
}

export interface HospitalRepository {
  create(data: Prisma.HospitalCreateInput): Promise<Hospital | null>
  findById(id: string): Promise<Hospital | null>
  findByName(name: string): Promise<Hospital | null>
  findAll(): Promise<Hospital[]>
  delete(id: string): Promise<void>
  update(props: IUpdateHospital, args: Omit<Prisma.HospitalUpdateArgs, 'where'>): Promise<Hospital>
}