import { Body, Controller, Get, Post, Route } from "tsoa";
import TranscriptionService from "../services/transcriptionService";
import ApiResponse from "../interfaces/apiResponse";
import { IAddTranscription, ITranscription, IUpdateTranscription } from "../interfaces/transcription";
import IGenerateFromYoutubeRequest from "../interfaces/generateFromYoutube";
import YoutubeInfo from "../interfaces/youtubeInfo";

@Route("transcription")
export class TranscriptionController extends Controller {
  private transcriptionService = new TranscriptionService();
  @Get("/get-list")
  public async getList(): Promise<ApiResponse<ITranscription[]>> {
    const t = await this.transcriptionService.getList();
    return new ApiResponse(0, t);
  }

  @Get("/{id}")
  public async getById(id: number): Promise<ApiResponse<ITranscription>> {
    const t = await this.transcriptionService.getById(id);
    return new ApiResponse(0, t);
  }

  @Post("/update")
  public async updateTranscription(@Body() request: IUpdateTranscription): Promise<ApiResponse> {
    const t = await this.transcriptionService.updateTranscription(request);
    return new ApiResponse(t);
  }

  @Post("/add")
  public async add(@Body() request: IAddTranscription): Promise<ApiResponse> {
    const t = await this.transcriptionService.add(request);
    return new ApiResponse(t);
  }

  @Post("/fetch-youtube-transcription")
  public async fetchYoutubeTranscription(@Body() request: IGenerateFromYoutubeRequest): Promise<ApiResponse<YoutubeInfo>> {
    const t = await this.transcriptionService.fetchYoutubeTranscription(request.youtubeUrl);
    return new ApiResponse(0, t);
  }
}
