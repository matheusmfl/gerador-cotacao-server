import { Plano, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IUpdatedPlano, PlanoRepository } from "../planoRepository";
import { InMemoryHospital } from "./hospital-in-memory";

export class InMemoryPlano implements PlanoRepository {

  public items: Plano[] = []
  public hospitalRepository = new InMemoryHospital()

  async listarHospitaisDoPlano(planoId: string): Promise<{ id: string; razao_social: string; telefone: string; endereco: string; cro: string | null; bairro: string; cidade: string; estado: string; cep: string | null; corretorId: string | null; }[] | null> {
    const plano = this.items.find((item) => item.id === planoId);

    if (!plano) {
      return null;
    }

    const hospitalId = plano.hospitalId;
    if (!hospitalId) {
      return null;
    }

    const hospital = await this.hospitalRepository.findById(hospitalId);

    if (!hospital) {
      return null;
    }

    return [{ ...hospital }];
  }

  async findAll(): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; }[]> {
    const planos = this.items
    return planos
  }


  async deletePlano(id: string): Promise<void> {
    const planoIndex = await this.items.findIndex((item) => item.id === id);

    if (planoIndex !== -1) {
      this.items.splice(planoIndex, 1);
    }

    return
  }

  async searchPlanoById(id: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {


    const plano: Plano | undefined = await this.items.find(item => {
      return item.id === id
    })

    if (!plano) {
      return null
    }

    return plano
  }
  async create(data: Prisma.PlanoCreateInput) {
    let plano
    if (data.id !== undefined) {
      plano = {
        id: data.id,
        name: data.name,
        slug: data.slug,
        hospitalId: null
      }
    }
    else {
      plano = {
        id: 'id-qualquer',
        name: data.name,
        slug: data.slug,
        hospitalId: null
      }
    }



    this.items.push(plano)


    return plano
  }
  async findBySlug(slug: string) {
    const plano: Plano | undefined = await this.items.find((item) => item.slug === slug)

    if (!plano) {
      return null
    }

    return plano
  }


  async updatePlano(props: IUpdatedPlano, args: Prisma.PlanoUpdateArgs<DefaultArgs>) {

    const index = await this.items.findIndex((item) => item.id === props.id)

    let plano = this.items[index]


    plano = {
      id: props.id,
      name: args.data.name as string,
      slug: args.data.slug as string,
      hospitalId: null
    }

    return plano
  }
  async findById(id: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    const plano: Plano | undefined = await this.items.find(item => {
      return item.id === id
    })

    if (!plano) {
      return null
    }

    return plano
  }

}