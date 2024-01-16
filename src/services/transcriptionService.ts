import { Body } from "tsoa";
import { IAddTranscription, ITranscription, IUpdateTranscription } from "../interfaces/transcription";
import TranscriptionRepo from "../repositories/transcriptionRepo";
import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';
import axios from "axios";
import { load } from "cheerio";
import YoutubeInfo from "../interfaces/youtubeInfo";
import IGenerateFromYoutubeRequest from "../interfaces/generateFromYoutube";

export default class TranscriptionService {
  transcriptionRepo = new TranscriptionRepo();
  public async fetchYoutubeTranscription(request: IGenerateFromYoutubeRequest): Promise<YoutubeInfo> {
    const videoPage = await axios.get(request.youtubeUrl);
    const $ = load(videoPage.data);
    const title = $('meta[itemprop="name"]').attr('content') ?? '';

    let transcript: TranscriptResponse[];
    try {
      transcript = await YoutubeTranscript.fetchTranscript(request.youtubeUrl, {lang: request.lang}).catch();
    } catch (e) {
       transcript = []
    }
    return { title, transcript };
  }

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