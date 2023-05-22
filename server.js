import mongoose from 'mongoose';
import { MONGO } from './credentials/credentials.js';

const server = mongoose;

export const connect = () => {
  server
    .connect(MONGO)
    .then(() => {
      console.log('connected to mongoose');
    })
    .catch((err) => {
      throw err;
    });
};
