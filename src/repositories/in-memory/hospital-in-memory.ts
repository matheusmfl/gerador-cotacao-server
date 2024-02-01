import { Hospital, Prisma } from "@prisma/client";

import { HospitalRepository } from "../hospital-repository";


export class InMemoryHospital implements HospitalRepository {

  public items: Hospital[] = []

  async create(data: Prisma.HospitalCreateInput) {


    const hospital = {
      id: '01',
      razao_social: data.razao_social,
      telefone: data.telefone,
      endereco: data.endereco,
      cro: data.cro || null,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      cep: data.cep || null,
      corretorId: null
    }



    await this.items.push(hospital)

    return hospital

  }

}