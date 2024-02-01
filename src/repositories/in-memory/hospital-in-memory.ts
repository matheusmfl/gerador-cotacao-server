import { Hospital, Prisma } from "@prisma/client";

import { HospitalRepository } from "../hospital-repository";


export class InMemoryHospital implements HospitalRepository {


  public items: Hospital[] = []

  async delete(id: string): Promise<void> {
    const hospitalIndex = await this.items.findIndex((item) => item.id === id);

    if (hospitalIndex !== -1) {
      this.items.splice(hospitalIndex, 1);
    }

    return
  }

  async findAll(): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }[]> {
    const hospitals = this.items

    return hospitals
  }

  async findByName(name: string) {
    const hospitalFinded = this.items.find(hospital => hospital.razao_social.includes(name))

    if (!hospitalFinded) {
      return null
    }

    return hospitalFinded
  }


  async findById(id: string): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; } | null> {

    const hospital = this.items.find((item) => item.id === id)
    console.log(this.items)

    if (!hospital) {
      return null
    }

    return hospital
  }

  async create(data: Prisma.HospitalCreateInput) {


    const hospital = {
      id: data.id ?? '01',
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