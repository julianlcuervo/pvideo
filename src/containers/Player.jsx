import React, { Component } from 'react';
import '../assets/styles/components/Player.scss';

const API = 'http://ec2-54-80-178-43.compute-1.amazonaws.com:8000/api/Movie/';
class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectMovie: [[]],
        };
        this.id = this.props.match.params.id;
        this.source="";
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                selectMovie: data.filter(item =>
                    item.id === Number(this.id)
                )
            }));
    }

    render() {
        const { selectMovie } = this.state;
        return (
            <div className="Player">
                <video src={selectMovie[0].source} type="video/mp4" controls autoPlay>
                </video>
                <div className="Player-back">
                    <button type="button" onClick={() => this.props.history.goBack()}>
                        Regresar
                </button>
                </div>
            </div>

        );
    }
};

export default Player;