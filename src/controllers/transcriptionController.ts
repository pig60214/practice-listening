import { Body, Controller, Get, Post, Route } from "tsoa";
import ITranscription from "../interfaces/transcription";
import TranscriptionService from "../services/transcriptionService";
import ApiResponse from "../interfaces/apiResponse";

@Route("transcription")
export class TranscriptionController extends Controller {
  private transcriptionService = new TranscriptionService();
  @Get("/get-all")
  public async getAllTranscriptions(): Promise<ApiResponse<ITranscription[]>> {
    const t = await this.transcriptionService.getTranscriptions();
    return new ApiResponse(0, t);
  }

  @Post("/update")
  public async updateTranscription(@Body() request: ITranscription): Promise<ApiResponse> {
    const t = await this.transcriptionService.updateTranscription(request);
    return new ApiResponse(t);
  }
}