import React from 'react';



class Playlist extends React.Component{


  render() {
     console.log(this.props)

     return (
        <div className="playlist">
        <i class='bx bx-chevron-left' ></i>
          <h1>Playlist</h1>
        
          <div className="playlist-item active">
              <div className="playlist-item-order"><i class='bx bx-play' ></i></div>
              <div className="playlist-item-content">
                  <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                  <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
              </div>
          </div>
          <div className="playlist-item">
              <div className="playlist-item-order">2</div>
              <div className="playlist-item-content">
                  <div className="song-info"><p>Say Something</p> <p>3:24</p></div>
                  <div className="song-artist"><p>A Great Big World, Christina Aguilera</p></div>
              </div>
          </div>
          <div className="playlist-item">
              <div className="playlist-item-order">3</div>
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
        </div>

    );

 }
}


export default Playlist
