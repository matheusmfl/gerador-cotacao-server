import { Prisma, Plano, Hospital } from "@prisma/client";

export interface IUpdatedPlano {
  id: string
  extraWhere?: Omit<Prisma.PlanoWhereUniqueInput, 'id'>
}

export interface PlanoRepository {
  findById(id: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>
  findBySlug(slug: string): Promise<Plano | null>
  updatePlano(props: IUpdatedPlano, args: Omit<Prisma.PlanoUpdateArgs, 'where'>): Promise<Plano>
  deletePlano(id: string): Promise<void>
  findAll(): Promise<Plano[]>
  listarHospitaisDoPlano(planoId: string): Promise<Hospital[] | null>
}