import pool from './connect';
import { objectToCamel } from 'ts-case-convert';

const transcriptionRepo = {
  async getTranscriptions(): Promise<ITranscription[]>{
    try {
      const result = await pool.query(`SELECT * FROM transcription`);
      const data = objectToCamel(result.rows) as ITranscription[];
      return data;
    } catch (err) {
      console.error('SQL error', err);
      return [];
    }
  },
}

export default transcriptionRepo;