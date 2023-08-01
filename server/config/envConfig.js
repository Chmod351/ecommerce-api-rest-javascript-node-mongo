import { config } from 'dotenv';
config();

const envConfig = {
  PORT: process.env.PORT,
  JWT: process.env.JWT_TOKEN,
  SERVER: process.env.MONGO,
  STRIPE: process.env.STRIPE_TOKEN,
  SECRET: process.env.SECRET,
  CLIENTID: process.env.CLIENTID,
};
export default envConfig;
