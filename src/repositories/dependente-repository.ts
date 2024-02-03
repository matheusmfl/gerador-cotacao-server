import { Prisma, Dependente } from "@prisma/client";

export interface IDependenteCreateProps {
  clienteId: string;
  data: Prisma.DependenteCreateInput
}

export interface IUpdatedDependente {
  id: string
  extraWhere?: Omit<Prisma.DependenteWhereUniqueInput, 'id'>
}

export interface DependenteRepository {
  create({ clienteId, data }: IDependenteCreateProps): Promise<Dependente>;
  findById(dependenteId: string): Promise<Dependente | null>
  delete(clientId: string, dependentId: string): Promise<void>
  update(props: IUpdatedDependente, args: Omit<Prisma.DependenteUpdateArgs, 'where'>): Promise<Dependente>
}