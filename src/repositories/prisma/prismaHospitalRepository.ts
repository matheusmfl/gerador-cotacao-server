import { Prisma } from "@prisma/client";
import { HospitalRepository } from "../hospital-repository";
import { prisma } from "@/lib/prisma";

export class PrismaHospitalRepository implements HospitalRepository {
  async findById(id: string) {
    const hospital = await prisma.hospital.findUnique({
      where: { id }
    })

    if (!hospital) {
      return null
    }

    return hospital
  }
  async create(data: Prisma.HospitalCreateInput): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }> {
    const hospital = await prisma.hospital.create({ data })

    return hospital
  }

}