import React from 'react';
import { hot } from 'react-hot-loader';
// import styles from 'style.scss';

import Song from './components/song';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        songs: []

    };

  }

  componentDidMount() {
    fetch("http://localhost:3000/songs")
    const obj = this;

    var responseHandler = function() {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        console.log(result)

        obj.setState({
            isLoaded: true,
            songs: result.songs});
    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    request.open("GET", "http://localhost:3000/songs");

    request.send();
  }

  render() {
      const { error, isLoaded, songs } = this.state;

      if (error) {
          return (
              <div className="container">
                  <div>Error: {error.message}</div>
                  <Song
                        products = {products}
                        error={error}
                        isLoaded={isLoaded}/>

              </div>
          );

      } else if (!isLoaded) {
          return (
              <div className="container">
                  <div>Loading...</div>

              </div>

          );


      } else {
          return (
                <div className="container">
                <div className="row">
                    <Song songs = {this.state.songs}/>
                </div>

              </div>

        );

      }

  }
}

export default hot(module)(App);