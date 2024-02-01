# App

Cota-Ai

  //  async teste({ id }: { id: string }) {
  //   const teste = await prisma.plano.findFirst({
  //     where: { id },
  //     include: {
  //       hospitaisPlano: {
  //         include: {
  //           hospital: true,
  //         }
  //       }
  //     }
  //   })
  //   const teste2 = await prisma.hospitaisPlano.findMany({
  //     where: { hospitalId: id },
  //     include: {
  //       hospital: true
  //     }
  //   })

## RFs (Requisitos funcionais)

- [ x ] Deve ser possível se cadastrar ( Cadastrar corretor );
- [ x ] Deve ser possível cadastrar um plano  
- [ x ] Deve ser possível encontrar plano pelo slug
- [ x ] Deve ser possível Editar um plano  
- [ x ] Deve ser possível pegar todos os planos
- [ x ] Deve ser possível Deletar um plano  
- [ x ] Deve ser possível Ler um plano pelo nome


- [ ] Deve ser possível cadastrar um hospital
- [ ] Deve ser possível editar um hospital
- [ ] Deve ser possível deletar um hospital
- [ ] Deve ser possível ler um ou mais hospitais pelo nome
- [ ] Deve ser possível ler um hospital pelo ID
- [ ] Deve ser possível listar todos os hospitais

- [ ] Deve ser possível se autenticar (corretor);

- [ ] Deve ser possível cadastrar uma rede referenciada;
- [ ] Deve ser possível Editar uma rede referenciada;
- [ ] Deve ser possível remover uma rede referenciada;
- [ ] Deve ser possível Ler uma rede referenciada;


- [ ] Deve ser possível criar uma cotação
- [ ] Deve ser possível Cadastrar Dependentes do Cliente
- [ ] Deve ser possível Cadastrar dependente em Dependentes do cliente
- [ ] Deve ser possível cadastrar Cliente
- [ ] Deve ser possível criar modalidades
- [ ] Deve ser possível criar um plano
- [ ] Deve ser possível Buscar uma cotação por data
- [ ] Deve ser possível Buscar uma cotação por cpf do cliente
- [ ] Deve ser possível editar uma cotação
- [ ] Deve ser possível buscar uma cotação por Id
- [ ] Deve ser possível atribuir uma rede referenciada à 1 ou mais planos

## RNs (Regras de negócio)

- [ x ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ x ] Não deve ser possível cadastrar o mesmo plano 2 vezes
- [ ] Não deve ser possível cadastrar o mesmo hospital 2 vezes ( same Name )


## RNFs (Requisitos não-funcionais)

