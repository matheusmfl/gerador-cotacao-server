# App

Cota-Ai

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível cadastrar uma rede referenciada;
- [ ] Deve ser possível criar uma cotação
- [ ] Deve ser possível criar um plano
- [ ] Deve ser possível Buscar uma cotação por data
- [ ] Deve ser possível Buscar uma cotação por cpf do cliente
- [ ] Deve ser possível editar uma cotação
- [ ] Deve ser possível buscar uma cotação por Id
- [ ] Deve ser possível atribuir uma rede referenciada à 1 ou mais planos
- [ ] Deve ser possível atribuir um plano à um banco
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