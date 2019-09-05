import React from 'react';


class Song extends React.Component {

    render() {
        const songs = this.props.songs.map((item, index) => {
            return (
                <p key={index}>{item.name}<br/>
                {item.lyrics}
                </p>

                )
        })
    return (
      <div>
        {songs}
      </div>
    );
  }
}

export default Song;