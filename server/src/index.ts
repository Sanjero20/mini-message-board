import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/route';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Routers
app.use(router);

// Listener
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.clear();
    console.log(`Server running at port: http://localhost:${port}/`);
  });
});
