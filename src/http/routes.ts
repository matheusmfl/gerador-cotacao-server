import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";
import { registerPlano } from "./controllers/registerPlano";

import { searchByNamePlano } from "./controllers/searchByNamePlano";


export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerPlano)
  app.get('/plano/search', searchByNamePlano)

}