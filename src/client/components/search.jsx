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

     return (
        <div className="search">
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
