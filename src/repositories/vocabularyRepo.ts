import pool from './connect';
import { objectToCamel } from 'ts-case-convert';
import IVocabulary from '../interfaces/word';

export default class VocabularyRepo {
  async add(request: IVocabulary) {
    try {
      await pool.query(`
      INSERT INTO vocabulary(transcription_id, word, video_offset)
      SELECT ${request.transcriptionId}, '${request.word.replaceAll("'", "''")}', ${request.videoOffset}
      WHERE NOT EXISTS (
        SELECT 1 FROM vocabulary WHERE transcription_id = ${request.transcriptionId} AND word = '${request.word.replaceAll("'", "''")}' AND video_offset = ${request.videoOffset}
      )
      `);
      return 0;
    } catch (err) {
      console.error('SQL error', err);
      return 1;
    }
  }
  async update(vocabulary: IVocabulary): Promise<number> {
    try {
      await pool.query(`UPDATE vocabulary SET word = '${vocabulary.word.replaceAll("'", "''")}', video_offset = ${vocabulary.videoOffset}  WHERE id = ${vocabulary.id}`);
      return 0;
    } catch (err) {
      console.error('SQL error', err);
      return 1;
    }
  }
  async getByTranscriptionId(transcriptionId: number): Promise<IVocabulary[]>{
    try {
      const result = await pool.query(`SELECT id, transcription_id, word, video_offset FROM vocabulary WHERE transcription_id = ${transcriptionId}`);
      const data = objectToCamel(result.rows) as IVocabulary[];
      return data;
    } catch (err) {
      console.error('SQL error', err);
      return [];
    }
  }
}
