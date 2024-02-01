import { Prisma } from "@prisma/client";
import { HospitalRepository } from "../hospital-repository";
import { prisma } from "@/lib/prisma";

export class PrismaHospitalRepository implements HospitalRepository {

  async findAll(): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }[]> {
    const hospitals = await prisma.hospital.findMany()

    return hospitals
  }

  async delete(id: string): Promise<void> {
    const hospital = await prisma.hospital.delete({
      where: { id }
    })
  }
  async findByName(name: string) {
    const hospital = await prisma.hospital.findFirst({
      where: {
        razao_social: {
          contains: name
        }
      }
    })

    if (!hospital) {
      return null
    }

    return hospital
  }
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