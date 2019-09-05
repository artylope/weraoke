import React from 'react';



class Playlist extends React.Component{

  render() {
     console.log(this.props)

     let playlistClasses = "";

     if(this.props.playlist === true){
       playlistClasses = "playlist-section show"
     } else if (this.props.playlist === false){
       playlistClasses = "playlist-section hide"
     }

     return (
       <div className={playlistClasses}>
          <div className="playlist">
              <div className="playlist-hide" onClick={()=>{this.props.handlePlaylistShowHide(this.props.playlist)}}>
                <i class='bx bx-chevron-right' ></i>
              </div>
              <div className="playlist-title">
                  <h1>Playlist</h1>
              </div>


              <div className="playlist-list">

                    <div className="playlist-item completed">
                        <div className="playlist-item-order">1</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item completed">
                        <div className="playlist-item-order">2</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item active">
                        <div className="playlist-item-order"><i class='bx bx-play' ></i></div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item">
                        <div className="playlist-item-order">4</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item">
                        <div className="playlist-item-order">5</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item">
                        <div className="playlist-item-order">6</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item">
                        <div className="playlist-item-order">7</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
                    <div className="playlist-item">
                        <div className="playlist-item-order">8</div>
                        <div className="playlist-item-content">
                            <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                            <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
                        </div>
                    </div>
              </div>
          </div>
          <div className="playlist-control-wrapper">
              <div className="playlist-control">
                <div className="prev-song"><i class='bx bx-shuffle' ></i></div>
                <div className="prev-song"><i class='bx bx-skip-previous' ></i></div>
                <div className="play-pause"><i class='bx bx-play'></i></div>
                <div className="next-song"><i class='bx bx-skip-next' ></i></div>
                <div className="prev-song"><i class='bx bxs-share-alt' ></i></div>

              </div>

          </div>
        </div>

    );

 }
}


export default Playlist
