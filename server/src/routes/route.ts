import express, { Request, Response } from 'express';

import newMessage from './new';

const router = express.Router();

router.use('/route', newMessage);

export default router;
