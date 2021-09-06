import { Request, Response } from 'express';
import getLocalData from '../utils/getLocalData';
import PredictService from '../services/PredictService';

class PredictController {
  async data(_req: Request, res: Response) {
    try {
      const data = getLocalData();
      return res.status(200).json(data);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }

  async predict(req: Request, res: Response) {
    try {
      const days = Number(req.query.days);

      const prediction = PredictService.predict(days);

      return res.status(200).json(prediction);
    } catch ({ message }) {
      return res.status(400).json({ error: message });
    }
  }
}

export default new PredictController();
