import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { getTranscriptions } from './repositories/transcription';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  const t = await getTranscriptions();
  res.send(t)
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});