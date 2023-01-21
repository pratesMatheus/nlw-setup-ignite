//Nosso SERVER será uma API RESTful, com Fastify
import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = fastify();
app.register(cors);

app.register(appRoutes);

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(()=> {
  console.log("Server is running!")
});

/**
 * Métodos HTTP:
 * get (buscar info),
 * post (criar algo),
 * delete (deletar um recurso),
 * put (atualizar algum recurso por completo),
 * patch (atualizar alguma informação específica de algum recurso)
*/
