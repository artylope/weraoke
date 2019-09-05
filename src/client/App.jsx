import React from 'react';
import { hot } from 'react-hot-loader';

// import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import Playlist from './components/playlist';
import PlaylistButton from './components/playlistButton';
import Video from './components/video';

import sessionSongs from './data/sessionSongs.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: true,
      sessionSongs: sessionSongs,
      nowPlaying: ""
    };


    this.handlePlaylistShowHide = this.handlePlaylistShowHide.bind(this);
    this.handlePlaylistItemClick = this.handlePlaylistItemClick.bind(this);
  }

  handlePlaylistShowHide(state){
    console.log('clicked');
    console.log(state);
    if(state === true){
      this.setState({
        playlist: false
      })
    } else if(state === false){
      this.setState({
        playlist: true
      })
    }
  }

  handlePlaylistItemClick(index){
    console.log('clicked playlist ', index);
    let selectedSong = this.state.sessionSongs[index];
    this.setState({
      nowPlaying: selectedSong
    })
  }

  render(){
    // console.log("session songs")
    // console.log(this.state.sessionSongs)
    return(
      <div>
      <h1 className="logo">Weraoke</h1>
        Lorem Ipsum


        <Search/>
        <Video nowPlaying={this.state.nowPlaying} />

        <PlaylistButton playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist nowPlaying={this.state.nowPlaying} sessionSongs={this.state.sessionSongs} playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} handlePlaylistItemClick= {this.handlePlaylistItemClick}/>
      </div>
    )
  }

}
export default hot(module)(App);
