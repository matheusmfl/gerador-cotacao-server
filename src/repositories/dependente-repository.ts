import { Prisma, Dependente } from "@prisma/client";

export interface IDependenteCreateProps {
  clienteId: string;
  data: Prisma.DependenteCreateInput
}

export interface DependenteRepository {
  create({ clienteId, data }: IDependenteCreateProps): Promise<Dependente>;
}