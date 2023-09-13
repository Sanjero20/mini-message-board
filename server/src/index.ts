import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/route';

dotenv.config();

const port = 3000;
const app = express();

app.use(express.json());

// Routers
app.get('/', (req: Request, res: Response) => {
  res.json({ text: 'Hello World' });
});

app.use(router);

// Listener
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.clear();
    console.log(`Server running at port: http://localhost:${port}/`);
  });
});
