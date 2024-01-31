import { Plano, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IUpdatedPlano, PlanoRepository } from "../planoRepository";

export class InMemoryPlano implements PlanoRepository {

  public items: Plano[] = []

  async searchBySlugParams(slug: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {

    this.items.push({
      name: 'jhonDoe',
      slug: 'jhondoe',
      id: 'idQlq',
      hospitalId: ''
    })

    const plano: Plano | undefined = await this.items.find(item => {
      item.slug = slug
    })

    if (!plano) {
      return null
    }

    return plano
  }
  async create(data: Prisma.PlanoCreateInput) {
    const plano = {
      id: 'id-qualquer',
      name: data.name,
      slug: data.slug,
      hospitalId: null
    }

    this.items.push(plano)
    console.log(this.items)

    return plano
  }
  async findBySlug(slug: string) {
    const plano: Plano | undefined = await this.items.find(item => {
      item.slug = slug
    })

    if (!plano) {
      return null
    }

    return plano
  }
  updatePlano(props: IUpdatedPlano, args: Prisma.PlanoUpdateArgs<DefaultArgs>): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; }> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<{ id: string; name: string; slug: string; hospitalId: string | null; } | null> {
    throw new Error("Method not implemented.");
  }

}