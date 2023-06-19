import cors from 'cors';

export default cors({
  origin: ['https://ciervademo.onrender.com', 'http://localhost:3000'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
  credentials: true,
  maxAge: 380000,
  exposedHeaders: ['Authorization'],
});
