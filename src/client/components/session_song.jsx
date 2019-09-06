import React from 'react';


class Session_Song extends React.Component {

    render() {
        const ssongs = this.props.session_song.map((item, index) => {
            return (
                <p key={index}>
                {item.session_name}<br/>
                {item.song_name}<br/>
                {item.artist_name}
                </p>

                )
        })
    return (
      <div>
        {ssongs}
      </div>
    );
  }
}

export default Session_Song;