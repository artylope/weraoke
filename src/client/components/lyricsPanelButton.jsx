import React from 'react';
import PropTypes from 'prop-types';


class LyricsPanelButton extends React.Component{

  render(){

    let lyricPanelButtonClasses = "";

    if(this.props.lyricsPanel === true){
      lyricPanelButtonClasses = "lyrics-panel-button hide"
    } else if (this.props.lyricsPanel === false){
      lyricPanelButtonClasses = "lyrics-panel-button show"
    }

    return(
      <div className="lyrics-panel-button-wrapper">
        <div className={lyricPanelButtonClasses} onClick={()=>{this.props.handleLyricsShowHide(this.props.lyricsPanel)}}>
          <i class='bx bxs-file' ></i> Show Lyrics
        </div>
      </div>
    )
  }


}
export default LyricsPanelButton
