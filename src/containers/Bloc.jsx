import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Commentary from '../components/Commentary';
import '../assets/styles/components/Bloc.scss';
import '../assets/styles/App.scss';

const API = 'http://ec2-34-227-68-165.compute-1.amazonaws.com:8000/api/Movie/';

class Bloc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: []
        };
        //console.log(props)
    }
    componentDidMount() {
        console.log(this.props.location.state.id)
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data, selectMovie: data.filter(item =>
                    item.id === this.props.location.state.id
                )
            }));
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        return (
            <section className="home" id="home">
                {selectMovie.map(item =>
                    <Sidebar key={item.id} {...item} />
                )}
                <div className="home-primary">
                    <div className="comments-container">
                        <ul className="comments-list" id="comments-list">
                            {initialState.map(item =>
                                <Commentary key={item.id} {...item} />
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
};

export default Bloc;