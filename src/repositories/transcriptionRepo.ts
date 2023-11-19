import pool from './connect';
import { objectToCamel } from 'ts-case-convert';
import ITranscription from "../interfaces/transcription";

export default class TranscriptionRepo {
  async getById(id: number): Promise<ITranscription> {
    try {
      const result = await pool.query(`SELECT id, title, content FROM transcription WHERE id = ${id}`);
      const data = objectToCamel(result.rows) as ITranscription[];
      return data[0];
    } catch (err) {
      console.error('SQL error', err);
      return {} as ITranscription;
    }
  }
  async updateTranscription(transcription: ITranscription): Promise<number> {
    try {
      await pool.query(`UPDATE transcription SET title = '${transcription.title}', content = '${transcription.content.replaceAll("'", "''")}', youtube_url = '${transcription.youtubeUrl}' WHERE id = ${transcription.id}`);
      return 0;
    } catch (err) {
      console.error('SQL error', err);
      return 1;
    }
  }
  async getList(): Promise<ITranscription[]>{
    try {
      const result = await pool.query(`SELECT id, title FROM transcription`);
      const data = objectToCamel(result.rows) as ITranscription[];
      return data;
    } catch (err) {
      console.error('SQL error', err);
      return [];
    }
  }
}
