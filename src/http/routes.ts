import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";
import { registerPlano } from "./controllers/registerPlano";
import { searchBySlugParams } from "./controllers/searchBySlugParams";
import { updatePlano } from "./controllers/updatePlano";




export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerPlano)
  app.get('/plano/search/:slug', searchBySlugParams)
  app.put('/plano/update/:id', updatePlano)

}