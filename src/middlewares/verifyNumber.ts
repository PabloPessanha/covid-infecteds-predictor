import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const days = Number(req.params.days);
  if (days <= 0 || !Number.isInteger(days) || Number.isNaN(days)) {
    return res.status(400).json({ error: 'Days must be integer positive number' });
  }
  return next();
};
