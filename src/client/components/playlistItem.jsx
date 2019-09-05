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

     return (
        <div className={playlistItemClasses}>
            <div className="playlist-item-order">{this.props.song.order}</div>
            <div className="playlist-item-content">
                <div className="song-info"><p>{this.props.song.name}</p> <p>{this.props.song.duration}</p></div>
                <div className="song-artist"><p>{this.props.song.artist}</p></div>
            </div>
        </div>

    );

 }
}


export default PlaylistItem
