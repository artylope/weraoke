import React from 'react';
import { hot } from 'react-hot-loader';
import YouTube from 'react-youtube';


//components
// import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import SearchPanelButton from './components/searchPanelButton';
import Playlist from './components/playlist';
import PlaylistButton from './components/playlistButton';
import Song from './components/song';
import Session_Song from './components/session_song';
import Lyrics from './components/lyrics';
import Form from './components/form';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      sessionId : 1,

      //data stuff
      preloadSong: {
        "name": "Just The Way You Are",
        "artist": "Bruno Mars",
        "video_link": "LjhCEhWiKXk",
        "duration": "PT3S",
        "order": 1,
        "status": "watched"
      },
      sessionSongs: [],
      allSongs: [],

      //UI stuff
      playlist: true,
      searchPanel: true,

      //current song info
      nowPlaying: 0,
      isPlaying: true,



    };


    this.handlePlaylistShowHide = this.handlePlaylistShowHide.bind(this);
    this.handlePlaylistItemClick = this.handlePlaylistItemClick.bind(this);
    this.handleSearchPanelShowHide = this.handleSearchPanelShowHide.bind(this);
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
    // console.log('clicked playlist ', index);
    // console.log('video duration ', videoDuration);
    let selectedSong = parseInt(index);
    this.setState({
      nowPlaying: selectedSong,
      // playlist: false
    })

  }

  handleSearchPanelShowHide(state){
    console.log('clicked');
    console.log(state);
    if(state === true){
      this.setState({
        searchPanel: false
      })
    } else if(state === false){
      this.setState({
        searchPanel: true
      })
    }
  }


  componentDidMount() {

    console.log('component did mount');


    //multiple fetch API
    let allSongsUrl = 'http://localhost:3000/api/songs';
    // let allArtistsUrl = 'http://localhost:3000/artists';
    let thisSessionSongsUrl = 'http://localhost:3000/api/sessions/' + this.state.sessionId;


    Promise.all([
            fetch(allSongsUrl).then(allSongs => allSongs.json()),
            fetch(thisSessionSongsUrl).then(allSessionSongs => allSessionSongs.json())
            ])
            .then((result) => {
               console.log("multiple fetch");
               console.log(result[0].songs);
               console.log(result[1].sessions_songs);
               //
               this.setState({
                 allSongs : result[0].songs,
                 sessionSongs : result[1].sessions_songs
               });

            })
            .catch((err) => {
                console.log(err);
            });


  }




    let sessionSongs = this.state.sessionSongs;

    let currentSong;
    if (sessionSongs.length === 0){
      currentSong = this.state.preloadSong;
    } else if (sessionSongs.length > 0) {
      currentSong = this.state.sessionSongs[this.state.nowPlaying];
    }

    //1280 x 780
    //960 x 585
    const opts = {
      height: '780',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        modestbranding: 1
      }
    };



    return(
      <div>


        <div className="video-panel">
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
        </div>

        <PlaylistButton playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist isPlaying = {this.state.isPlaying} nowPlaying={this.state.nowPlaying} sessionSongs={this.state.sessionSongs} playlist={this.state.playlist} handlePlaylistShowHide= {this.handlePlaylistShowHide} handlePlaylistItemClick= {this.handlePlaylistItemClick}/>
        Lorem Ipsum
        <Search handleSearchPanelShowHide = {this.handleSearchPanelShowHide} searchPanel={this.state.searchPanel} allSongs = {this.state.allSongs}/>
        <SearchPanelButton handleSearchPanelShowHide= {this.handleSearchPanelShowHide} searchPanel={this.state.searchPanel} />
        <h1 className="logo">Weraoke</h1>
      </div>
    )
  }





}

export default hot(module)(App);
