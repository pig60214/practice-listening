import ITranscription from "../interfaces/transcription";
import transcriptionRepo from "../repositories/transcriptionRepo";

export default class TranscriptionService {
  public async getTranscriptions(): Promise<ITranscription[]> {
    const t = await transcriptionRepo.getTranscriptions();
    return t;
  }
}