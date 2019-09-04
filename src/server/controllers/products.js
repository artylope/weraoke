module.exports = (db) => {


  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };


  let newProduct = (request, response) => {

    db.products.newThing(request.body,(error, result) => {
      // TODO add conditionals that check for errors
      console.log("OUTTTTTTTTTTTTTTTT")
      console.log(result)
      response.send(result[0]);
    });


  };



  return {
    getAll: getAll,
    newProduct:newProduct
  };
};
