import express from 'express';
import importMiddlewares from './middlewaresHandler.js';
import Error from 'http-errors';
import { connect } from './server.js';
import { config } from 'dotenv';
config();

const middlewares = await importMiddlewares();
const app = express();

app.use(async (req, res, next) => {
  next(Error.NotFound());
});

middlewares.forEach((middleware) => {
  console.log(`Loading middleware /${middlewares.length}: ${middleware.name}`);
  app.use(middleware);
});

app.listen(process.env.PORT, () => {
  connect();
  console.log('conected to port' + process.env.PORT);
});
