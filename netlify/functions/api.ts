import express, { Router } from "express";
import serverless from "serverless-http";
import { getTranscriptions } from '../../src/repositories/transcription';

const api = express();

const router = Router();
router.get("/hello", async (req, res) => {
  const t = await getTranscriptions();
  res.send(t)
});

api.use("/api/", router);

export const handler = serverless(api);