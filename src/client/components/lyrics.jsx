import React from 'react';
import PropTypes from 'prop-types';

class Lyrics extends React.Component {

    render() {
      let lyricsClasses;
      if (this.props.lyricsPanel === true){
        lyricsClasses = 'song-lyrics show';
      } else if(this.props.lyricsPanel === false){
        lyricsClasses = 'song-lyrics hide';
      }
        return (
            <div className={lyricsClasses}>
                <div className="minimise-lyrics" onClick={()=>{this.props.handleLyricsShowHide(this.props.lyricsPanel)}}>
                  <i class='bx bx-x-circle' ></i>
                </div>
                <p>{this.props.lyrics}</p>
            </div>
        );
    }
}

export default Lyrics;
