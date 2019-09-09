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
import Session_Song from './components/session_song';
import Lyrics from './components/lyrics';
import Form from './components/form'


//dummy data from js file
import sessionSongs from './data/sessionSongs.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      //playlist UI stuff
      playlist: true,

      //playlist data stuff
      sessionSongs: sessionSongs,

      //current song info
      currentVideoDuration: "",
      nowPlaying: sessionSongs[0],
      prevSong: "",
      nextSong: sessionSongs[1],

      //ajax of songs
      error: null,
      isLoaded: false,
      songs: [],
      sSongs: []

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
    // console.log('clicked playlist ', index);
    // console.log('video duration ', videoDuration);
    let selectedSong = this.state.sessionSongs[index];
    this.setState({
      nowPlaying: selectedSong,
      // playlist: false
    })
  }

  componentDidMount() {
    //fetch("http://localhost:3000/sessions/"+input)
    const obj = this;

    var responseHandler = function() {
        // console.log("response text", this.responseText);
        // console.log("status text", this.statusText);
        // console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        console.log("result", result);

        obj.setState({
            isLoaded: true,
            sSongs: result.sessions_songs}
            );

        console.log('after set state');

    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    request.open("GET", "http://localhost:3000/api/sessions/1");

    request.send();
  }

  render(){
    console.log("session songs")
    console.log(this.state.sSongs)
    const { error, isLoaded, sSongs } = this.state;
    let songRender = "";
    let lyricsRender = "";

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
         lyricsRender = (
            <React.Fragment>
                  <Lyrics session_song = {this.state.sSongs}/>
            </React.Fragment>
            )
        songRender = (
              <React.Fragment>
                <Session_Song session_song={this.state.sSongs}/>
            </React.Fragment>

      );

    }



    return(
      <div>
      <h1 className="logo">Weraoke</h1>
        Lorem Ipsum
        <Form/>
        {songRender}
        <Search/>
        <Video nowPlaying={this.state.nowPlaying} />
        <PlaylistButton playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist nowPlaying={this.state.nowPlaying} sessionSongs={this.state.sessionSongs} playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} handlePlaylistItemClick= {this.handlePlaylistItemClick}/>
        {lyricsRender}
      </div>
    )
  }





}

export default hot(module)(App);