module.exports = (app, db) => {
  const songs = require('./controllers/songs')(db);

  app.get('/songs', songs.getAll);
  //app.post('/newproduct', Songs.newProduct);

  // const sessions = require()

  // app.get('/sessions/:id', sessions.);
  // app.post('/sessions/:id', sessions.newSession);

  // app.get('/artists/:id', artists.);
  // app.get('/songs/:id', songs.);


};