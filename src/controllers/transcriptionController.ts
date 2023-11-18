import { Controller, Get, Route } from "tsoa";
import ITranscription from "../interfaces/transcription";
import TranscriptionService from "../services/transcriptionService";

@Route("transcription")
export class TranscriptionController extends Controller {
  private transcriptionService = new TranscriptionService();
  @Get("/get-all")
  public async getAllTranscriptions(): Promise<ITranscription[]> {
    const t = await this.transcriptionService.getTranscriptions();
    return t;
  }
}