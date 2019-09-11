import React from 'react';
import PropTypes from 'prop-types';



class Search extends React.Component{

  constructor(props) {
      super(props);

      this.state = {
          searchTerm: '',
          searchResults: this.props.allSongs
      };

      this.handleSearchInput = this.handleSearchInput.bind(this);
  }


  handleSearchInput(searchTerm){
    // console.log(searchTerm);
    this.updateSearchResults(searchTerm);
  }

  updateSearchResults(searchTerm){
    let allSongs = this.props.allSongs;
    // console.log(searchTerm)
    searchTerm = searchTerm.toLowerCase();

    let searchResults =  allSongs.filter( function(song) {
      if( song.song_name.toLowerCase().includes(searchTerm) || song.artist_name.toLowerCase().includes(searchTerm)){
        return song;
      }
    });

    // console.log(searchResults);

    this.setState({
      searchResults: searchResults
    })
  }

  componentDidMount(){
    this.setState({
      searchResults: this.props.allSongs
    })
  }
  
  render() {

    let eachSongClasses = 'each-song';


    let songItems = this.props.allSongs.map( (song, index) => {
      return(
        <div className={eachSongClasses} key={index} onClick={()=>{this.props.handleAddSongToPlaylist(song.id)}}>
          <p>{song.song_name} , {song.artist_name}</p>
          <a>Add</a>
        </div>
      )
    });

    let searchPanelClasses;

    if(this.props.searchPanel === true){
      searchPanelClasses = "search show"
    } else if (this.props.searchPanel  === false){
      searchPanelClasses = "search hide"
    }

    // console.log(this.state.searchResults);
    let searchResultsList = this.state.searchResults.map( (song, index) => {
          return(
          <div className={eachSongClasses} key={index}>
            <div className="song-details">
              <p className="song-name">{song.song_name}</p>
              <p className="song-artist">{song.artist_name}</p>
            </div>
            <a onClick={()=>{this.props.handleAddSongToPlaylist(song.id)}}>Add</a>
          </div>
        )});


     return (
        <div className={searchPanelClasses}>
          <div className="search-title">
              <h1>Search</h1>
              <div className="search-panel-hide" onClick={()=>{this.props.handleSearchPanelShowHide(this.props.searchPanel)}}>
                <i className='bx bx-x-circle' ></i>
              </div>
          </div>


          <input onChange={(event) => this.handleSearchInput(event.target.value)}/>
            <div class="all-songs">
              <p className="search-results-count">{this.state.searchResults.length} results</p>
              {searchResultsList}
            </div>
        </div>

    );

 }
}


export default Search
