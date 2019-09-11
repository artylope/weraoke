import React from 'react';
import PropTypes from 'prop-types';

class Lyrics extends React.Component {

    constructor(props){
        super(props);
        this.state={
            lyrics : '',
            artist : '',
            song : '',
            current: null
        }

        this.getLyricsForCurrentSong=this.getLyricsForCurrentSong.bind(this);
    }

    getLyricsForCurrentSong (artist, song) {

        console.log('get lyrics')
        let lyricsURL = 'https://orion.apiseeds.com/api/music/lyric/'+artist+'/'+song+'?apikey=6OuZYIhADWWkOz53zaP9udYTuorPEnHiYze6l0PlTqxUtGTzaeOSx2X7yuTd9X3J'

        fetch(lyricsURL)
            .then(res => res.json())
            .then(
                (res) => {
                    console.log(res);
                    // return (result.result.track.text);
                    this.setState({
                        lyrics: res.result.track.text
                    });
                })
            .catch((error) => {
                this.setState({
                     error
                });
            });
    }

    componentDidMount(){

        console.log('mounted')

        this.setState ({
            //current : this.props.sessionSongs[this.props.nowPlaying],
            artist : 'backstreet boys',
            song : 'i want it that way'
        })

        //console.log('hereeeee', this.state.current)
        // this.getLyricsForCurrentSong(this.state.current.artist_name, this.state.current.song_name);
        // this.getLyricsForCurrentSong(this.state.artist, this.state.song);
    }

    render() {
        console.log('whyyyy', this.props.sessionSongs)
        console.log('nani', this.props.sessionSongs[this.props.nowPlaying])
        this.getLyricsForCurrentSong(this.state.artist this.state.song);
        //let currentSong = this.props.currentSong;
        // let songlyrics = this.getLyricsForCurrentSong(currentSong.artist_name,currentSong.song_name);
        // console.log(songlyrics);
        return (
            <div className="song-lyrics">
                {this.state.lyrics}
            </div>
        );
    }
}

export default Lyrics;