import pool from './connect';

async function getTranscriptions() {
  try {
    const result = await pool.query(`SELECT * FROM transcription`);
    return result.rows[0];
  } catch (err) {
    console.error('SQL error', err);
    return [];
  }
}

export { getTranscriptions }