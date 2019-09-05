import React from 'react';
import PropTypes from 'prop-types';



class PlaylistItem extends React.Component{

  render() {

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

    let songDurH, songDurM, songDurS, videoDurationInSecs;

    if( durationArray.length === 4){
      songDurH = parseInt(durationArray[0]);
      songDurM = parseInt(durationArray[1]);
      songDurS = parseInt(durationArray[2]);
      videoDurationInSecs = ((songDurH*60) + songDurM)*60 + songDurS;
    } else if( durationArray.length === 3){
      songDurM = parseInt(durationArray[0]);
      songDurS = parseInt(durationArray[1]);
      videoDurationInSecs = (songDurM*60) + songDurS;
    } else if(durationArray.length === 2){
      songDurS = parseInt(durationArray[0]);
      videoDurationInSecs = songDurS;
    }

    console.log(songDurH);
    console.log(songDurM);
    console.log(songDurS);

    let songDurDisplay;

    if(songDurH === undefined && songDurM > 0){
      songDurDisplay = `${songDurM.toString()}:${songDurS.toString().padStart(2, '0')}`
    } else if(songDurH === undefined && songDurM === undefined){
      songDurDisplay = `${songDurS.toString()}`
    } else {
      songDurDisplay = `${songDurH.toString()}:${songDurM.toString().padStart(2, '0')}:${songDurS.toString().padStart(2, '0')}`
    }

    console.log(songDurDisplay);

    console.log('videoDurationInSecs ', videoDurationInSecs)






     return (
        <div className={playlistItemClasses} onClick={()=>{this.props.handlePlaylistItemClick(this.props.index, videoDurationInSecs )}}>
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
