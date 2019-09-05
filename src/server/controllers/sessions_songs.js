module.exports = (db) => {


  let getAll = (request, response) => {

    db.sessions_songs.getAll((error, sessions_songs) => {

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
    getAll
  };
};