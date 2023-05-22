import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const server = mongoose;

export const connect = () => {
  server
    .connect(process.env.MONGO)
    .then(() => {
      console.log('connected to mongoose');
    })
    .catch((err) => {
      throw err;
    });
};
