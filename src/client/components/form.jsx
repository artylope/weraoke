import React from 'react';
import axios from 'axios';


class Form extends React.Component {
    constructor() {
        super()

        this.state={
            playlist: "",
            song: []
        }

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = e => {


    }

    render() {
        const { playlist, song } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name="playlist"
                            value={playlist}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="song"
                            value={song}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Add to playlist</button>
                </form>
            </div>
        )
        )
    return (
      <div>
        {songlyrics}
      </div>
    );
  }
}

export default Form;