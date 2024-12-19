import Fastify from 'fastify'

const app = Fastify({ logger: true })
app.get('/', async (req, reply) => {
  reply.send("Primeiro Server com Typescript")
})



app.listen({port: 3000}, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Servidor rodando em ${address}`);
});



