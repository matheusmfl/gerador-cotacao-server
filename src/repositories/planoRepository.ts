import { Prisma, Plano } from "@prisma/client";

export interface IUpdatedPlano {
  id: string
  extraWhere?: Omit<Prisma.PlanoWhereUniqueInput, 'id'>
}

export interface PlanoRepository {
  searchPlanoById(slug: string): Promise<Plano | null>
  create(data: Prisma.PlanoCreateInput): Promise<Plano>
  findBySlug(slug: string): Promise<Plano | null>
  updatePlano(props: IUpdatedPlano, args: Prisma.PlanoUpdateArgs): Promise<Plano>
  deletePlano(id: string): Promise<void>

}