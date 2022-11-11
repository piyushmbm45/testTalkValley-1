import express from 'express';
import { APP_PORT, DB_URL } from './config.js';
import pkg from 'mongoose';
const app = express();
import Ad from './models/adModel.js';
import Company from './models/comModel.js';
import cors from 'cors';

const { connect, connection } = pkg;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ads', async (req, res) => {
  const ads = await Ad.find({});
  const data = await Company.find({});
  console.log('🚀 ~ file: server.js ~ line 17 ~ app.get ~ data', data);
  res.send(ads);
});

connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('DB connected');
});

app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});
