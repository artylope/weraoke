import React from 'react';
import { hot } from 'react-hot-loader';

// import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import Playlist from './components/playlist';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };


  }

  render(){
    return(
      <div>
      <h1 className="logo">Weraoke</h1>
        Lorem Ipsum
        <button>Hello</button>
        <Search/>
        <Playlist/>
      </div>
    )
  }

}
export default hot(module)(App);
