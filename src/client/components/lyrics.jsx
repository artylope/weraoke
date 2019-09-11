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

      let lyrics = this.props.lyrics.split("\n");

      let lyricsDisplay = lyrics.map( line => {
        return(
          <p>{line}</p>
        );
      })

      console.log(lyrics);

        return (
            <div className={lyricsClasses}>
                <div className="minimise-lyrics" onClick={()=>{this.props.handleLyricsShowHide(this.props.lyricsPanel)}}>
                  <div>Hide Lyrics</div>
                </div>
                <div>{lyricsDisplay}</div>
            </div>
        );
    }
}

export default Lyrics;
