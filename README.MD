# App

Cota-Ai

  // async teste({ id }: { id: string }) {
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
- [ ] Deve ser possível cadastrar um plano  
- [ ] Deve ser possível cadastrar um hospital
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível cadastrar uma rede referenciada;
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

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após ser criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ] A cotação deve ser identificada por um UUID