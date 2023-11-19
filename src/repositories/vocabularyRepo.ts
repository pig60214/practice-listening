import pool from './connect';
import { objectToCamel } from 'ts-case-convert';
import IVocabulary from '../interfaces/word';

export default class VocabularyRepo {
  async add(request: IVocabulary) {
    try {
      await pool.query(`INSERT INTO vocabulary(transcription_id, word) VALUES(${request.transcriptionId}, '${request.word.replaceAll("'", "''")}')`);
      return 0;
    } catch (err) {
      console.error('SQL error', err);
      return 1;
    }
  }
  async update(vocabulary: IVocabulary): Promise<number> {
    try {
      await pool.query(`UPDATE vocabulary SET word = '${vocabulary.word.replaceAll("'", "''")}' WHERE id = ${vocabulary.id}`);
      return 0;
    } catch (err) {
      console.error('SQL error', err);
      return 1;
    }
  }
  async getByTranscriptionId(transcriptionId: number): Promise<IVocabulary[]>{
    try {
      const result = await pool.query(`SELECT * FROM vocabulary WHERE transcription_id = ${transcriptionId}`);
      const data = objectToCamel(result.rows) as IVocabulary[];
      return data;
    } catch (err) {
      console.error('SQL error', err);
      return [];
    }
  }
}
