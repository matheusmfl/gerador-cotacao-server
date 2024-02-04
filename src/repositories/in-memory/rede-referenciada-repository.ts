import { HospitaisPlano } from "@prisma/client";
import { RedeReferenciadaRepository } from "../rede-referenciada-repository";

export class InMemoryRedeReferenciada implements RedeReferenciadaRepository {

  public items: HospitaisPlano[] = []

  async findByPlanoId(planoId: string): Promise<{ id: number; planoId: string; hospitalId: string; }[] | null> {
    const rede_referenciada = await this.items.filter(item => item.planoId === planoId)

    if (rede_referenciada.length < 1) {
      return null
    }

    return rede_referenciada
  }
  async findByHospitalId(hospitalId: string): Promise<{ id: number; planoId: string; hospitalId: string; }[] | null> {
    const rede_referenciada = await this.items.filter(item => item.hospitalId === hospitalId)

    if (rede_referenciada.length < 1) {
      return null
    }

    return rede_referenciada
  }


  async delete(planoId: string, hospitalId: string): Promise<void> {
    const rede_referenciada_index = await this.items.findIndex(item => item.planoId === planoId && item.hospitalId === hospitalId)
    this.items.splice(rede_referenciada_index, 1)
    return
  }

  async create(planoId: string, hospitalId: string) {
    const rede_referenciada: HospitaisPlano = {
      id: 1,
      hospitalId,
      planoId
    }
    await this.items.push(rede_referenciada)

    return rede_referenciada

  }

}