import express from 'express';
import importMiddlewares from './middlewaresHandler.js';
import { config } from 'dotenv';
config();

const midlewares = importMiddlewares();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});
