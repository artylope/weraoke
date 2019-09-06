module.exports = (app, db) => {
  const songs = require('./controllers/songs')(db);
  const sessions_songs = require('./controllers/sessions_songs')(db)

  app.get('/songs', songs.getAll);
  app.get('/sessions_songs', sessions_songs.getBySessionId);
  //app.post('/newproduct', Songs.newProduct);

  // const sessions = require()

  // app.get('/sessions/:id', sessions.);
  // app.post('/sessions/:id', sessions.newSession);

  // app.get('/artists/:id', artists.);
  // app.get('/songs/:id', songs.);


};