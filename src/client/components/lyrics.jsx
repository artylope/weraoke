import React from 'react';


class Lyrics extends React.Component {

    render() {
        const songlyrics = this.props.songLyrics

        return (
            <div className="song-lyrics"><p>
                {songlyrics}</p>
            </div>
        );
    }
}

export default Lyrics;