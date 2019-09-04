
CREATE TABLE IF NOT EXISTS songs (
  id SERIAL PRIMARY KEY,
  name TEXT,
  artist_id INTEGER,
  video_link TEXT,
  lyrics TEXT
);


CREATE TABLE IF NOT EXISTS artists (
	id SERIAL PRIMARY KEY,
	name TEXT,
	image_link TEXT
);

CREATE TABLE IF NOT EXISTS sessions (
	id SERIAL PRIMARY KEY,
	name TEXT
);

CREATE TABLE IF NOT EXISTS sessions_songs (
	id SERIAL PRIMARY KEY,
	session_id INTEGER,
	song_id INTEGER
);