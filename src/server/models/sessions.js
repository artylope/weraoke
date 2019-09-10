module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {

        const queryString = "select * from sessions";
        console.log('in model')
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

    let createNewSession = (data, callback) => {

        console.log('in model');
        //data is request.body in controller
        console.log('data', data)
        // let session_id = (request.params.id);
        let sessionName = (data.session_name);

        console.log(sessionName);

        const queryString = "insert into sessions (session_name) values ($1)";
        const values = [sessionName]

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
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
        createNewSession,
    };
};