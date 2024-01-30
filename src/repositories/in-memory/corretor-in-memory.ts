import { Corretor, Prisma } from "@prisma/client";
import { CorretorRepository } from "../corretorRepository";

export class InMemoryCorretor implements CorretorRepository {

  public items: Corretor[] = []

  async create(data: Prisma.CorretorCreateInput) {
    const user = {
      id: 'id-qualquer',
      name: data.name,
      email: data.email,
      password: data.password
    }

    this.items.push(user)

    return user

  }

}