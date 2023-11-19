import ITranscription from "../interfaces/transcription";
import TranscriptionRepo from "../repositories/transcriptionRepo";

export default class TranscriptionService {
  transcriptionRepo = new TranscriptionRepo();
  public async updateTranscription(transcription: ITranscription): Promise<number> {
    const t = await this.transcriptionRepo.updateTranscription(transcription);
    return t;
  }
  public async getTranscriptions(): Promise<ITranscription[]> {
    const t = await this.transcriptionRepo.getTranscriptions();
    return t;
  }
}