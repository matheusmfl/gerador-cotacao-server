import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";
import { registerPlano } from "./controllers/planos/registerPlano";

import { updatePlano } from "./controllers/planos/updatePlano";
import { deletePlano } from "./controllers/planos/deletePlano";
import { SearchById } from "./controllers/planos/searchPlanoById";
import { FindAllPlanos } from "./controllers/planos/findAllPlanos";
import { registerCliente } from "./controllers/clientes/registerCliente";
import { findClienteById } from "./controllers/clientes/findById";
import { createDependentesController } from "./controllers/dependentes/create";




export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerPlano)
  app.get('/plano/search/:id', SearchById)
  app.put('/plano/update/:id', updatePlano)
  app.delete('/plano/delete/:id', deletePlano)
  app.get('/planos', FindAllPlanos)

  // Hospital

  // dependentes

  app.post('/clientes/:clienteId/dependente', createDependentesController)
  // Clientes

  app.post('/cliente', registerCliente)
  app.get('/clientes/:id', findClienteById)

}