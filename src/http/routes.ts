import { FastifyInstance } from "fastify";
import { registerCorretor } from "./controllers/registerCorretor";


export async function appRoutes(app: FastifyInstance) {
  app.post('/corretor', registerCorretor)
}