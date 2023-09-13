import express, { Request, Response } from 'express';
import Message from '../models/message';

const newMessage = express.Router();

newMessage.post('/new', async (req: Request, res: Response) => {
  console.log(req.body);

  const newMessage = new Message({
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  });

  try {
    const createdMessage = await newMessage.save();
    res.json(createdMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occured' });
  }
});

export default newMessage;
