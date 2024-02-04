import { HospitaisPlano } from "@prisma/client";
import { RedeReferenciadaRepository } from "../rede-referenciada-repository";

export class InMemoryRedeReferenciada implements RedeReferenciadaRepository {

  public items: HospitaisPlano[] = []

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