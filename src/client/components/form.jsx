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

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state.playlist)
    }

    submitHandler(event) {
        event.preventDefault()
        console.log(this.state)
        axios.post('"http://localhost:3000/api/sessions/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

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
    }
}


export default Form;