import { Hospital, Prisma } from "@prisma/client";

import { HospitalRepository, IUpdateHospital } from "../hospital-repository";
import { DefaultArgs } from "@prisma/client/runtime/library";


export class InMemoryHospital implements HospitalRepository {



  public items: Hospital[] = []

  async update(props: IUpdateHospital, args: Omit<Prisma.HospitalUpdateArgs<DefaultArgs>, "where">): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }> {
    const index = await this.items.findIndex((item) => item.id === props.id)

    let hospital = this.items[index]


    hospital = {
      id: props.id ?? '1',
      bairro: args.data.bairro as string ?? 'bairro',
      cep: args.data.cep as string ?? 'cep',
      cidade: args.data.cidade as string ?? 'cidade',
      corretorId: args.data.corretor as string ?? null,
      cro: args.data.cro as string ?? 'cro',
      endereco: args.data.endereco as string ?? 'endereco',
      estado: args.data.estado as string ?? 'estado',
      razao_social: args.data.razao_social as string ?? 'razao_social',
      telefone: args.data.telefone as string ?? 'telephone'
    }

    return hospital
  }

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