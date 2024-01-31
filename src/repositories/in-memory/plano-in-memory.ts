import { Plano, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IUpdatedPlano, PlanoRepository } from "../planoRepository";

export class InMemoryPlano implements PlanoRepository {


  public items: Plano[] = []

  deletePlano(id: string): Promise<void> {
    throw new Error("Method not implemented.");
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
      console.log('Nao achei o plano :/')
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
  findById(id: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    throw new Error("Method not implemented.");
  }

}