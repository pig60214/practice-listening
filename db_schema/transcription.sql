CREATE TABLE transcription (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   content VARCHAR(50) NOT NULL,
   youtube_url VARCHAR(50) NOT NULL,
   create_date date NOT NULL DEFAULT CURRENT_TIMESTAMP
);