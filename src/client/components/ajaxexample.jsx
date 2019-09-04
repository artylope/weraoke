import React from 'react';




class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha'
    };

    this.doReq = this.doReq.bind(this);
  }

  doReq(){
      console.log("request");

      const ComponentState = this;
      // what to do when we recieve the request
      var responseHandler = function() {


          console.log("response text", JSON.parse(this.responseText));
          console.log("status text", this.statusText);
          console.log("status code", this.status);
          const result = JSON.parse(this.responseText);

          ComponentState.setState({products: result});

      };


    // make a new request
    let request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    request.open("GET", "http://localhost:3000/products");

    // send the request
    request.send();






  }

  render() {
      console.log('Products');
          console.log(this.state.products);
          // let productComponents= this.state.products.map( (product) => {
          //     return(
          //         <div>product.name</div>
          //     )
          // });

    return (

      <div>

        <p>{this.state.monkey}</p>
        <button onClick={this.doReq}>Make ajax Request </button>
        <input className="name" />
      </div>
    );
  }
}

export default Form;
