import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Commentary from '../components/Commentary';
import '../assets/styles/components/Bloc.scss';
import '../assets/styles/App.scss';

const API = 'http://ec2-54-80-178-43.compute-1.amazonaws.com:8000/api/Movie/';
const APIcomments = 'http://ec2-54-80-178-43.compute-1.amazonaws.com:8000/api/Comment/';
class Bloc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: [],
            comments: [],
        };
        //console.log(props)
    }
    componentDidMount() {
        //console.log(this.props.location.state.id)
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data, selectMovie: data.filter(item =>
                    item.id === this.props.location.state.id
                )
            }));
        fetch(APIcomments)
            .then(response => response.json())
            .then(data => this.setState({
                comments: data.filter(item =>
                    item.idMovie === this.props.location.state.id
                )
            }));
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        const { comments } = this.state;
        console.log(comments)
        //console.log(comments["1"].idComment)
        return (
            <section className="home" id="home">
                {selectMovie.map(item =>
                    <Sidebar key={item.id} {...item} />
                )}
                <div className="home-primary">
                    <div className="comments-container">
                        <ul className="comments-list" id="comments-list">
                            {comments.map(item =>
                                <Commentary key={item.idComment} {...item} />
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
};

export default Bloc;