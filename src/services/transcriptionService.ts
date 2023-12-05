import { Body } from "tsoa";
import { IAddTranscription, ITranscription, IUpdateTranscription } from "../interfaces/transcription";
import TranscriptionRepo from "../repositories/transcriptionRepo";

export default class TranscriptionService {
  transcriptionRepo = new TranscriptionRepo();

  public async add(@Body() request: IAddTranscription): Promise<number> {
    const result = await this.transcriptionRepo.add(request);
    return result;
  }
  public async getById(id: number): Promise<ITranscription> {
    const result = await this.transcriptionRepo.getById(id);
    return result;
  }
  public async updateTranscription(transcription: IUpdateTranscription): Promise<number> {
    const t = await this.transcriptionRepo.updateTranscription(transcription);
    return t;
  }
  public async getList(): Promise<ITranscription[]> {
    const result = await this.transcriptionRepo.getList();
    return result;
  }
}