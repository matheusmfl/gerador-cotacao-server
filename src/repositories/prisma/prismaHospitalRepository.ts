import { Prisma } from "@prisma/client";
import { HospitalRepository } from "../hospital-repository";
import { prisma } from "@/lib/prisma";

export class PrismaHospitalRepository implements HospitalRepository {
  async create(data: Prisma.HospitalCreateInput): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }> {
    const hospital = await prisma.hospital.create({ data })

    return hospital
  }

}