import React from 'react';
import PropTypes from 'prop-types';



class Search extends React.Component{


  render() {


    let songItems = this.props.songs.map( (song, index) => {
      return(
        <div key={index}>
          <p>{song.song_name}</p>
        </div>
      )
    });

     return (
        <div className="search">
        <i className='bx bx-search-alt'></i>
        <input/>
          <div>
            {songItems}
          </div>
        </div>

    );

 }
}


export default Search
