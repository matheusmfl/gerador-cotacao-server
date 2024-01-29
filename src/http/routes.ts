import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";


export async function appRoutes(app: FastifyInstance) {

  // Corretor
  app.post('/corretor', registerCorretor)

  // Plano
  app.post('/plano', registerCorretor)

}