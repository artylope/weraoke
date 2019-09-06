import React from 'react';
import { hot } from 'react-hot-loader';

//components
// import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import Playlist from './components/playlist';
import PlaylistButton from './components/playlistButton';
import Video from './components/video';
import Song from './components/song';


//dummy data from js file
import sessionSongs from './data/sessionSongs.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: true,
      sessionSongs: sessionSongs,
      currentVideoDuration: "",
      nowPlaying: sessionSongs[0],
      prevSong: "",
      nextSong: sessionSongs[1],
      error: null,
      isLoaded: false,
      songs: []

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

  handlePlaylistItemClick(index, videoDuration){
    console.log('clicked playlist ', index);
    console.log('video duration ', videoDuration);
    let selectedSong = this.state.sessionSongs[index];
    this.setState({
      nowPlaying: selectedSong,
      // playlist: false
    })
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

  render(){
    // console.log("session songs")
    // console.log(this.state.sessionSongs)
    const { error, isLoaded, songs } = this.state;
    let songRender = "";

    if (error) {
    songRender = (
            <React.Fragment>
                <div>Error: {error.message}</div>
                <Song
                      products = {products}
                      error={error}
                      isLoaded={isLoaded}/>

            </React.Fragment>
        );

    } else if (!isLoaded) {
        songRender = (
            <React.Fragment>
                <div>Loading...</div>

            </React.Fragment>

        );


    } else {
        songRender = (
              <React.Fragment>
                  <Song songs = {this.state.songs}/>
            </React.Fragment>

      );

    }



    return(
      <div>
      <h1 className="logo">Weraoke</h1>
        Lorem Ipsum

        {songRender}
        <Search/>
        <Video nowPlaying={this.state.nowPlaying} />
        <PlaylistButton playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist nowPlaying={this.state.nowPlaying} sessionSongs={this.state.sessionSongs} playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} handlePlaylistItemClick= {this.handlePlaylistItemClick}/>
      </div>
    )
  }





}

export default hot(module)(App);
