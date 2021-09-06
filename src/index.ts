import express from 'express';
import verifyNumber from './middlewares/verifyNumber';
import PredictController from './controllers/PredictController';
import { updateEveryDay, updateLocalData } from './utils/updateData';

updateLocalData();
updateEveryDay();

const predictController = new PredictController();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get('/data', predictController.data);

app.get('/predict', verifyNumber, predictController.predict);

app.listen(PORT);
