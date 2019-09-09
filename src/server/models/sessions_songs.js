module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

         const queryString = "select sessions.id, songs.song_name, songs.video_link, songs.lyrics, artists.artist_name, sessions.session_name from sessions_songs inner join songs on (sessions_songs.song_id = songs.id) inner join artists on (artists.id = songs.artist_id) inner join sessions on (sessions_songs.session_id = sessions.id) order by sessions.id";

        dbPoolInstance.query(queryString, (error, queryResult) => {
            if (error) {
                // invoke callback function with results after query has executed
                callback(error, null);
            } else {
                // invoke callback function with results after query has executed

                callback(null, queryResult.rows );
            }
        });
    };

    let getById = (id, callback) => {

        let arr = [id];

        const queryString = "select songs.song_name, songs.video_link, songs.lyrics, artists.artist_name, sessions.session_name from sessions_songs inner join songs on (sessions_songs.song_id = songs.id) inner join artists on (artists.id = songs.artist_id) inner join sessions on (sessions_songs.session_id = sessions.id) where sessions.id=($1)";

        dbPoolInstance.query(queryString, arr, (error, queryResult) => {
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
        getAll,
        getById,

    };
};