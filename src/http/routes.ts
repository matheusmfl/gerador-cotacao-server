import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";
import { registerPlano } from "./controllers/registerPlano";
import { searchPlanoById } from "./controllers/searchBySlugParams";
import { updatePlano } from "./controllers/updatePlano";
import { deletePlano } from "./controllers/deletePlano";




export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerPlano)
  app.get('/plano/search/:id', searchPlanoById)
  app.put('/plano/update/:id', updatePlano)
  app.delete('/plano/delete/:id', deletePlano)

}