import React from 'react';
import PropTypes from 'prop-types';



class PlaylistItem extends React.Component{

  render() {

    console.log(this.props.song.name)

    let playlistItemClasses = "";
    if (this.props.song.status === "playing"){
      playlistItemClasses = "playlist-item active"
    }else if(this.props.song.status === "watched"){
      playlistItemClasses = "playlist-item completed"
    }else if(this.props.song.status === "unwatched"){
      playlistItemClasses = "playlist-item"
    }

    let duration = this.props.song.duration;
    duration = duration.replace('PT','')
    duration = duration.replace(/([^0-9])+/g, ",");
    let durationArray = duration.split(',');
    console.log(durationArray);

    let songDurH, songDurM, songDurS;

    if( durationArray.length === 4){
      songDurH = durationArray[0];
      songDurM = durationArray[1];
      songDurS = durationArray[2];
    } else if( durationArray.length === 3){
      songDurM = durationArray[0];
      songDurS = durationArray[1];
    } else if(durationArray.length === 2){
      songDurS = durationArray[0];
    }

    console.log(songDurH);
    console.log(songDurM);
    console.log(songDurS);

    let songDurDisplay;

    if(songDurH === undefined){
      songDurDisplay = `${songDurM}:${songDurS.padStart(2, '0')}`
    } else if(songDurH === undefined && songDurM === undefined){
      songDurDisplay = `${songDurS.padStart(2, '0')}`
    } else {
      songDurDisplay = `${songDurH}:${songDurM.padStart(2, '0')}:${songDurS.padStart(2, '0')}`
    }

     return (
        <div className={playlistItemClasses}>
            <div className="playlist-item-order">{this.props.song.order}</div>
            <div className="playlist-item-content">
                <div className="song-info"><p>{this.props.song.name}</p> <p>{songDurDisplay}</p></div>
                <div className="song-artist"><p>{this.props.song.artist}</p></div>
            </div>
        </div>

    );

 }
}


export default PlaylistItem
