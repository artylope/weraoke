import React from 'react';
import { hot } from 'react-hot-loader';
import YouTube from 'react-youtube';


//components
import Nav from './components/nav';
// import Playlist from './components/playlist';
// import Player from './components/player';
import Search from './components/search';
import SearchPanelButton from './components/searchPanelButton';
import Playlist from './components/playlist';
import PlaylistButton from './components/playlistButton';
import Song from './components/song';
import Session_Song from './components/session_song';
import Lyrics from './components/lyrics';
import LyricsPanelButton from './components/lyricsPanelButton';
// import Form from './components/form';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

      sessionId : 4,

      //data stuff
      preloadSong: {
        "name": "Never Gonna Give You Up",
        "artist": "Rick Astley",
        "video_link": "dQw4w9WgXcQ"
      },
      sessionLoaded: false,
      sessionSongs: [],
      allSongs: [],

      //UI stuff
      playlist: false,
      searchPanel: false,
      playlistEditMode: false,
      videoComponent: true,
      lyricsPanel:true,

      //current song info
      nowPlaying: 0,
      isPlaying: true,
      lyrics:'Loading lyrics...'

    };


    this.handlePlaylistShowHide = this.handlePlaylistShowHide.bind(this);
    this.handlePlaylistItemClick = this.handlePlaylistItemClick.bind(this);
    this.handlePlaylistItemDelete = this.handlePlaylistItemDelete.bind(this);
    this.handleSearchPanelShowHide = this.handleSearchPanelShowHide.bind(this);
    this.handleAddSongToPlaylist = this.handleAddSongToPlaylist.bind(this);
    this.handleLyricsShowHide = this.handleLyricsShowHide.bind(this);

  }

  handlePlaylistShowHide(state){
    // console.log('clicked');
    // console.log(state);
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

    let selectedSong = parseInt(index);
    this.setState({
      nowPlaying: selectedSong,
      // playlist: false
    })

  }

  handlePlaylistItemDelete(songId, sessionSongId){
    // console.log('delete song from playlist ', songId);
    // console.log('currentSong' + this.state.nowPlaying);
    // console.log('sessionSongId' + sessionSongId);

    let deleteSongURL = window.location.origin + '/api/sessions/' + this.state.sessionId + '/songs/delete';
    fetch(deleteSongURL , {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        session_id: this.state.sessionId,
        song_id: songId
      })
    })
    .then( (response) => {
       //do something awesome that makes the world a better place

       console.log('done');
       console.log('response', response);

       console.log('reload data');

       // let sessionSongs = this.state.sessionSongs;
       // sessionSongs.splice(sessionSongId, 1);
       // console.log(sessionSongs);

       this.loadData();
    });

  }

  handleSearchPanelShowHide(state){
    // console.log('clicked');
    // console.log(state);
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

  handleAddSongToPlaylist(songId){
    // console.log('add song ', songId);
    let addSongURL = window.location.origin + '/api/sessions/' + this.state.sessionId + '/songs/new';
    // console.log(addSongURL);


    fetch(addSongURL, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        session_id: this.state.sessionId,
        song_id: songId
      })
    })
    .then( (response) => {
       //do something awesome that makes the world a better place
       // console.log('done');
       // console.log('response', response);
       this.loadData();
       this.setState({
         playlist: true
       })
    });
  }

  handleLyricsShowHide(state){
    // console.log('clicked');
    // console.log(state);
    if(state === true){
      this.setState({
        lyricsPanel: false
      })
    } else if(state === false){
      this.setState({
        lyricsPanel: true
      })
    }
  }

  loadData(){
    //multiple fetch API
    let allSongsUrl = window.location.origin + '/api/songs';
    // let allArtistsUrl = 'http://localhost:3000/artists';
    let thisSessionSongsUrl = window.location.origin + '/api/sessions/' + this.state.sessionId + "/songs";


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
                 sessionLoaded: true,
                 allSongs : result[0].songs,
                 sessionSongs : result[1].sessions_songs
               });

            })
            .catch((err) => {
                console.log(err);
            });
  }

  loadLyrics(artist, song){
    console.log('in load lyrics');
    let lyricsURL = 'https://orion.apiseeds.com/api/music/lyric/'+artist+'/'+song+'?apikey=6OuZYIhADWWkOz53zaP9udYTuorPEnHiYze6l0PlTqxUtGTzaeOSx2X7yuTd9X3J'


    Promise.all([
            fetch(lyricsURL).then(lyrics => lyrics.json())
            ])
            .then((result) => {
              console.log("result", result);

              if(result[0].error){
                this.setState({
                  lyrics: "Lyrics not found.",
                });
              } else {
                this.setState({
                  lyrics: result[0].result.track.text,
                });
                console.log('in load lyrics promise set!');
              }



            })
            .catch((err) => {
                console.log(err);
                console.log('in load lyrics promise errrrrr!');
            });
  }


  componentDidMount(){
    // console.log("window.location.pathname " , window.location.pathname);

    if( (window.location.pathname) === "/playlist" ){
      console.log("playlist");
      this.setState({
        playlist: true,
        searchPanel: true,
        videoComponent: true,
        lyricsPanel: true

      })
    } else {
      console.log("video/default");
      this.setState({
        playlist: false,
        searchPanel: false,
        videoComponent: true,
        lyricsPanel: true
      })
    }

    console.log('component did mount');
    this.loadData();
    }



  render(){
    console.log('in render');
    let sessionSongs = this.state.sessionSongs;

    let currentSong;
    if (sessionSongs.length <= 0){
      currentSong = this.state.preloadSong;
    } else if (sessionSongs.length > 0) {
      currentSong = this.state.sessionSongs[this.state.nowPlaying];
      console.log(currentSong);
      // console.log('now playing: ', this.state.sessionSongs)
      // console.log('now playing: ', this.state.nowPlaying)
    }



    //1280 x 780
    //960 x 585
    const opts = {
      height: '780',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        modestbranding: 1
      }
    };

    let videoPanelClasses = "video-panel"
    if(this.state.videoComponent === true){
      videoPanelClasses = "video-panel show";
    } else if(this.state.videoComponent === false){
      videoPanelClasses = "video-panel hide";
    }

    return(
      <div>
        <Nav/>

        <div className={videoPanelClasses}>
          <YouTube
          videoId={currentSong.video_link}
          opts={opts}
          onReady={this._onReady}
          onPlay={

            ()=>{
              console.log('nowPlaying' , this.state.nowPlaying);
              //get lyrics
              let artist = this.state.sessionSongs[this.state.nowPlaying].artist_name;
              let song = this.state.sessionSongs[this.state.nowPlaying].song_name;

              this.loadLyrics(artist, song);
            }
          }
          onEnd={()=>{
            if( this.state.nowPlaying === (this.state.sessionSongs.length - 1)){
              this.setState({
                nowPlaying: 0,
              })
            } else {
              this.setState({
                nowPlaying: (this.state.nowPlaying) + 1
              })
            }
          }}
          />
        </div>


        <PlaylistButton
            playlist={this.state.playlist}
            handlePlaylistShowHide= {this.handlePlaylistShowHide} />
        <Playlist
            isPlaying = {this.state.isPlaying}
            nowPlaying={this.state.nowPlaying}
            sessionSongs={this.state.sessionSongs}
            playlist={this.state.playlist}
            handlePlaylistShowHide= {this.handlePlaylistShowHide}
            handlePlaylistItemClick= {this.handlePlaylistItemClick}
            handlePlaylistItemDelete= {this.handlePlaylistItemDelete}/>
        <SearchPanelButton
            handleSearchPanelShowHide= {this.handleSearchPanelShowHide}
            searchPanel={this.state.searchPanel} />
        <Search
            sessionSongs= {this.state.sessionSongs}
            handleSearchPanelShowHide = {this.handleSearchPanelShowHide}
            searchPanel={this.state.searchPanel}
            allSongs = {this.state.allSongs}
            handleAddSongToPlaylist = {this.handleAddSongToPlaylist}/>
        <LyricsPanelButton
            lyricsPanel={this.state.lyricsPanel}
            handleLyricsShowHide = {this.handleLyricsShowHide}/>
        <Lyrics
            lyricsPanel={this.state.lyricsPanel}
            lyrics={this.state.lyrics}
            handleLyricsShowHide = {this.handleLyricsShowHide}/>


      </div>
    )
  }

}

export default hot(module)(App);
