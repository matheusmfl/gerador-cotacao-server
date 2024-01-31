import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";
import { registerPlano } from "./controllers/registerPlano";

import { updatePlano } from "./controllers/updatePlano";
import { deletePlano } from "./controllers/deletePlano";
import { SearchById } from "./controllers/searchPlanoById";




export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerPlano)
  app.get('/plano/search/:id', SearchById)
  app.put('/plano/update/:id', updatePlano)
  app.delete('/plano/delete/:id', deletePlano)

}