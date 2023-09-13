import express, { Request, Response } from 'express';
import Message from '../models/message';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const response = await Message.find();
  res.json(response);
});

router.post('/new', async (req: Request, res: Response) => {
  const newMessage = new Message({
    text: req.body.text,
    user: req.body.user,
    added: new Date().toISOString(),
  });

  try {
    const response = await newMessage.save();
    res.json(response);
  } catch (error) {
    console.log('Something went wrong', error);
    res.status(500).json({ error });
  }
});

export default router;
