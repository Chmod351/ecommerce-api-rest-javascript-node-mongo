import express from 'express';
import importMiddlewares from './middlewaresHandler.js';
import { connect } from './server.js';
import { config } from 'dotenv';
import user from './server/Users/userRoutes.js';
import cart from './server/ShopingCart/shoppingCartRoutes.js';
import product from './server/Products/productRoutes.js';
import purchase from './server/Purchases/purchasesRoutes.js';
import comment from './server/Comments/commentsRoutes.js';
import response from './server/Responses/responsesRoutes.js';
import { errorHandler } from './server/helpers/errorHandler.js';

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
const apiRouthes = [
  { route: '/api/users', controller: user },
  { route: '/api/carts', controller: cart },
  { route: '/api/purchases', controller: purchase },
  { route: '/api/products', controller: product },
  { route: '/api/comments', controller: comment },
  { route: '/api/responses', controller: response },
];
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
