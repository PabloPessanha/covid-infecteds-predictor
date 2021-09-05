import express, { Request, Response } from 'express';
import updateLocalData from './data/updateLocalData';
import verifyNumber from './middlewares/verifyNumber';
// import CovidController from './controllers/CovidController';

const app = express();

app.use(express.json());

app.get('/predict', verifyNumber, (req: Request, res: Response) => {
  const { days } = req.query;
  return res.status(200).json({ days });
});

app.get('/update', async (req, res) => {
  try {
    await updateLocalData();
    return res.status(201).json({ message: 'updated!' });
  } catch ({ message }) {
    return res.status(400).json({ error: message });
  }
});

app.listen(3333);
