import { HospitaisPlano, Hospital } from "@prisma/client";
import { RedeReferenciadaRepository } from "../rede-referenciada-repository";

interface hospitalWithPlano {
  id: string
  planoId: string
  hospitalId: string
  hospitals: Array<Hospital>
}

export class InMemoryRedeReferenciada implements RedeReferenciadaRepository {


  public items: HospitaisPlano[] = []

  public itemsWithPlano: hospitalWithPlano[] = []




  async getHospitals(planoId: string) {
    const id = '1'
    const hospitalId = '1'
    const hospitals: Hospital[] = [
      { bairro: 'Boa viagem', cep: '51021-320', id: '2', cidade: 'recife', corretorId: '2', cro: 'Sla', endereco: 'brazilia teimosa', estado: 'PE', razao_social: 'Zazão social', telefone: '121313' }
    ]


    const fictitiousHospital: hospitalWithPlano = {
      hospitalId, id, planoId, hospitals
    }
    await this.itemsWithPlano.push(fictitiousHospital)

    const hospital = this.itemsWithPlano.find(item => item.hospitalId === hospitalId)
    if (!hospital) {
      return hospitals
    }
    const listHospitals = hospital.hospitals

    return listHospitals

  }

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