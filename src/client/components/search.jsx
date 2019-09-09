import React from 'react';
import PropTypes from 'prop-types';



class Search extends React.Component{


  render() {


    let songItems = this.props.allSongs.map( (song, index) => {
      return(
        <div className="each-song" key={index}>
          <p>{song.song_name},{song.artist_id}</p>
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

          <i className='bx bx-search-alt'></i>
          <input/>
            <div class="all-songs">
              {songItems}
            </div>
        </div>

    );

 }
}


export default Search
