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
                <p>{this.props.lyrics}</p>
            </div>
        );
    }
}

export default Lyrics;
