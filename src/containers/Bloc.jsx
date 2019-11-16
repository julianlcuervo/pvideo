import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Commentary from '../components/Commentary';
import '../assets/styles/components/Bloc.scss';
import '../assets/styles/App.scss';

const API = 'http://ec2-54-152-225-204.compute-1.amazonaws.com:8000/api/Movie/';

class Bloc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data, selectMovie: data.filter(item =>
                    item.title === "Avengers Endgame"
                )
            }));
    }

    videoSearch(term) {
        const { initialState } = this.state;
        this.setState({
            selectMovie:
                initialState.filter(item =>
                    item.title.toUpperCase() == "Joker"
                )
        })
    }
    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        console.log(selectMovie)
        return (
            <section className="home" id="home">
                {selectMovie.map(item =>
                    <Sidebar key={item.id} {...item} />
                )}
                <div className="home-primary">
                    <div className="comments-container">
                        <ul className="comments-list" id="comments-list">
                            <Commentary />
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
};

export default Bloc;