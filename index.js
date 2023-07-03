import express from 'express';
import importMiddlewares from './middlewaresHandler.js';
import { connect } from './server.js';
import { config } from 'dotenv';
import { errorHandler } from './server/helpers/errorHandler.js';
import apiRouthes from './server/api/routes.js';

//config

config();
const app = express();
const PORT = process.env.PORT;
export const JWT_TOKEN = process.env.JWT_TOKEN;

// importing middlewares
const middlewares = await importMiddlewares();

middlewares.forEach((middleware) => {
  app.use(middleware);
});

// importing routes
for (const controller of apiRouthes) {
  app.use(controller.route, controller.controller);
}

// error middleware for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// error Handler for custom errors
app.use(errorHandler);

// server
app.listen(PORT, () => {
  connect();
  console.log('conected to port' + PORT);
});
