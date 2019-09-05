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
        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <Search/>
        <Playlist/>
      </div>
    )
  }

}
export default hot(module)(App);
