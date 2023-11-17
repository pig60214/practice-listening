import { Request, Response } from "express";
import transcriptionRepo from "./repositories/transcriptionRepo";

export default {
  async getTranscriptions(req: Request, res: Response) {
    const t = await transcriptionRepo.getTranscriptions();
    res.send(t);
  },
}