import { TranscriptResponse } from "youtube-transcript";

export default interface YoutubeInfo {
  title: string,
  transcript: TranscriptResponse[]
}