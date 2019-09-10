module.exports = (db) => {

    let getAll = (request, response) => {
        console.log('in controller')
        db.sessions.getAll((error, result) => {

            if (error) {
                console.error('error getting sessions', error);
                response.status(500);
                response.send('server error');
            } else {
                response.send({sessions: result});
            }
        });
    };

    let createNewSession = (request, response) => {

        console.log('in controller');
        console.log('request', request.body);
        // console.log('response', response);
        let sessions = request.body;

         db.sessions.createNewSession(request.body,(error, result) => {

            if (error) {
                console.error('error creating session', error);
                response.status(500);
                response.send('server error');
            } else {
                console.log('in controller send');
                response.send('banana');
            }
        });

    }


    return {
        getAll: getAll,
        createNewSession: createNewSession,
    };
};