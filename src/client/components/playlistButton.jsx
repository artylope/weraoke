import React from 'react';



class PlaylistButton extends React.Component{

  render(){
    console.log(this.props);

    let playlistButtonClasses = "";

    if(this.props.playlist === true){
      playlistButtonClasses = "playlist-button hide"
    } else if (this.props.playlist === false){
      playlistButtonClasses = "playlist-button show"
    }

    return(
      <div className="playlist-button-wrapper">
        <div className={playlistButtonClasses} onClick={()=>this.props.handlePlaylistShowHide(this.props.playlist)}>
          <i className='bx bxs-playlist' ></i>
        </div>
      </div>
    )
  }


}
export default PlaylistButton
