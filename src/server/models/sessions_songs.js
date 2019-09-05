module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

    dbPoolInstance.query('select songs.song_name, songs.video_link, songs.lyrics, artists.artist_name, sessions.session_name from sessions_songs inner join songs on (sessions_songs.song_id = songs.id) inner join artists on (artists.id = songs.artist_id) inner join sessions on (sessions_songs.session_id = sessions.id) where sessions_songs.song_id=1', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };



  return {
    getAll
  };
};