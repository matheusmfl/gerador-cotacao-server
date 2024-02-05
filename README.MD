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

- [x] Deve ser possível se cadastrar ( Cadastrar corretor );
- [x] Deve ser possível cadastrar um plano  
- [x] Deve ser possível encontrar plano pelo slug
- [x] Deve ser possível Editar um plano  
- [x] Deve ser possível pegar todos os planos
- [x] Deve ser possível Deletar um plano  
- [x] Deve ser possível Ler um plano pelo nome


- [x] Deve ser possível cadastrar um hospital
- [x] Deve ser possível editar um hospital
- [x] Deve ser possível deletar um hospital
- [x] Deve ser possível ler um ou mais hospitais pelo nome
- [x] Deve ser possível ler um hospital pelo ID
- [x] Deve ser possível listar todos os hospitais

- [x] Deve ser possível cadastrar um cliente
- [x] deve ser possível ler um cliente por id
- [x] deve ser possível ler um cliente por nome
- [x] deve ser possível ler um cliente pelo documento
- [x] Deve ser possível editar um cliente passando o ID
- [x] deve ser possível deletar um cliente


- [x] Deve ser possível cadastrar um dependente de um cliente
- [x] Deve ser possível listar dependentes do cliente
- [ x ] Deve ser possível atualizar lista de dependentes do cliente por id do dependente
- [x] Deve ser possível deletar um dependente




- [ ] Deve ser possível se autenticar (corretor);

- [ x ] Deve ser possível atribuir um hospital à uma rede referenciada
- [ x ] Deve ser possível remover um hospital de um plano
- [ ] Deve ser possível listar hospitais de um plano


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
- [ x ] Não deve ser possível cadastrar o mesmo hospital 2 vezes ( same Name )
- [  ] Não deve ser possível cadastrar o cliente com mesmo documento
- [ ] Ao buscar um hospital pelo nome, não deve se diferenciar letras maiúsculas de minúsculas


## RNFs (Requisitos não-funcionais)

