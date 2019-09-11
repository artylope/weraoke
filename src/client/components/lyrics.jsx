import React from 'react';
import PropTypes from 'prop-types';

class Lyrics extends React.Component {
    constructor(props){
        super(props);
        this.state= {

        }

    }



    render() {
        return (
            <div className="song-lyrics">
                <p>{this.props.lyrics}</p>
            </div>
        );
    }
}

export default Lyrics;
