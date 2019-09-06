module.exports = (db) => {


  let getBySessionId = (request, response) => {

    db.sessions_songs.getBySessionId((error, sessions_songs) => {

      if (error) {
        console.error('error getting session songs', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({sessions_songs: sessions_songs});
      }
    });
  };




  return {
    getBySessionId: getBySessionId
  };
};