import express from 'express';
import verifyNumber from './middlewares/verifyNumber';
import PredictController from './controllers/PredictController';
import { updateEveryDay } from './utils/updateData';

const app = express();

app.use(express.json());

app.get('/data', PredictController.data);

app.get('/predict', verifyNumber, PredictController.predict);

updateEveryDay();

app.listen(3333);
