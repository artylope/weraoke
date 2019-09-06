import React from 'react';
import { hot } from 'react-hot-loader';
import YouTube from 'react-youtube';


//components
// import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import Playlist from './components/playlist';
import PlaylistButton from './components/playlistButton';
import Song from './components/song';
import Session_Song from './components/session_song';
import Lyrics from './components/lyrics';


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
      nowPlaying: 0,
      isPlaying: true,


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
    let selectedSong = parseInt(index);
    this.setState({
      nowPlaying: selectedSong,
      // playlist: false
    })

    this.calculateCurrentVideoDuration(index);
  }

  calculateCurrentVideoDuration(id){
    //calculate current video duration
    console.log('in calculateCurrentVideoDuration', id);

    let currentVideo = this.state.sessionSongs[id];
    let duration = currentVideo.duration;
    duration = duration.replace('PT','')
    duration = duration.replace(/([^0-9])+/g, ",");
    let durationArray = duration.split(',');

    let songDurH, songDurM, songDurS, videoDurationInSecs;

    if( durationArray.length === 4){
      songDurH = parseInt(durationArray[0]);
      songDurM = parseInt(durationArray[1]);
      songDurS = parseInt(durationArray[2]);
      videoDurationInSecs = ((songDurH*60) + songDurM)*60 + songDurS;
    } else if( durationArray.length === 3){
      songDurM = parseInt(durationArray[0]);
      songDurS = parseInt(durationArray[1]);
      videoDurationInSecs = (songDurM*60) + songDurS;
    } else if(durationArray.length === 2){
      songDurS = parseInt(durationArray[0]);
      videoDurationInSecs = songDurS;
    }

    console.log("current video duration");
    console.log(videoDurationInSecs);

    this.setState({
      currentVideoDuration: videoDurationInSecs
    })

  }



  componentDidMount() {

    console.log('component did mount');
    this.calculateCurrentVideoDuration(this.state.nowPlaying);


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

    request.open("GET", "http://localhost:3000/sessions_songs");

    request.send();
  }

  componentWillUnmount() {
    clearTimeout(timer);
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

    let allSongs = this.state.sessionSongs;
    let currentSong = allSongs[this.state.nowPlaying];

    const opts = {
      height: '780',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };


    return(
      <div>



        <YouTube
        videoId={currentSong.video_link}
        opts={opts}
        onReady={this._onReady}
        onEnd={()=>{
          this.setState({
            nowPlaying: (this.state.nowPlaying) + 1,
          })
        }}
        />
        <PlaylistButton playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist isPlaying = {this.state.isPlaying} nowPlaying={this.state.nowPlaying} sessionSongs={this.state.sessionSongs} playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} handlePlaylistItemClick= {this.handlePlaylistItemClick}/>
        Lorem Ipsum
        <Search/>
        <h1 className="logo">Weraoke</h1>
        {songRender}

        {lyricsRender}
      </div>
    )
  }





}

export default hot(module)(App);
