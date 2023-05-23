import express from 'express';
import importMiddlewares from './middlewaresHandler.js';
import { connect } from './server.js';
import { config } from 'dotenv';
import comment from './server/comments/commentsController.js';
import user from './server/users/usersControllers.js';
import cart from './server/shopingCart/shopingCartController.js';
import product from './server/products/productController.js';
import purchase from './server/purchases/purchasesController.js';
import errorHandler from './server/helpers/errorHandler.js'

//config

config();
const middlewares = await importMiddlewares();
const app = express();
const PORT = process.env.PORT;
export const JWT_TOKEN = process.env.JWT_TOKEN

// middlewares

middlewares.forEach((middleware) => {
  console.log(`Loading middleware /${middlewares.length}: ${middleware.name}`);
  app.use(middleware);
});

//routes
const apiRouthes = [
  { route: '/api', controller: comment },
  { route: '/api', controller: user },
  { route: '/api', controller: cart },
  { route: '/api', controller: purchase },
  { route: '/api', controller: product },
];
for (const controller of apiRouthes) {
  app.use(controller.route, controller.controller);
}

app.use(errorHandler)
// server
app.listen(PORT, () => {
  connect();
  console.log('conected to port' + PORT);
});
