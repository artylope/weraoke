import React from 'react';
import PropTypes from 'prop-types';



class Search extends React.Component{

  constructor(props) {
      super(props);

      this.state = {
          searchTerm: ""
      };

      this.handleSearchInput = this.handleSearchInput.bind(this);
  }


  handleSearchInput(searchTerm){
    console.log(searchTerm);
  }

  render() {

    let eachSongClasses = 'each-song';


    let songItems = this.props.allSongs.map( (song, index) => {
      return(
        <div className={eachSongClasses} key={index} onClick={()=>{this.props.handleAddSongToPlaylist(song.id)}}>
          <p>{song.id}.{song.song_name},{song.artist_name}</p>
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

     return (
        <div className={searchPanelClasses}>
          <div className="search-title">
              <h1>Search</h1>
              <div className="search-panel-hide" onClick={()=>{this.props.handleSearchPanelShowHide(this.props.searchPanel)}}>
                <i className='bx bx-x-circle' ></i>
              </div>
          </div>

          <i className='bx bx-search-alt' ></i>
          <input onChange={(event) => this.handleSearchInput(event.target.value)}/>
            <div class="all-songs">
              {songItems}
            </div>
        </div>

    );

 }
}


export default Search
