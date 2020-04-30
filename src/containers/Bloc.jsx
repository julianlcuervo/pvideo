import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Commentary from '../components/Commentary';
import CommentBox from '../components/CommentBox';
import '../assets/styles/components/Bloc.scss';
import '../assets/styles/App.scss';
import { userInfo } from 'os';

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
const APIcomments = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Comment/';
class Bloc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: [],
            comments: [],
            stateComment: ''
        };
        this.id = this.props.match.params.id;
    }
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                initialState: data, selectMovie: data.filter(item =>
                    item.id === Number(this.id)
                )
            }));
        fetch(APIcomments)
            .then(response => response.json())
            .then(data => this.setState({
                comments: data.filter(item =>
                    item.idMovie === Number(this.id)
                )
            }));
    }

    viewComment(term) {
        const { stateComment } = this.state;
        if (stateComment !== term[1]) {
            this.setState({ stateComment: term[1] })
            fetch(APIcomments, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idMovie: this.id,
                    text: term[1],
                    userName: term[0]
                })
            })
            setTimeout(() => {
                fetch(APIcomments)
                    .then(response => response.json())
                    .then(data => this.setState({
                        comments: data.filter(item =>
                            item.idMovie === Number(this.id)
                        )
                    }));
            }, 1000)
        }
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        const { comments } = this.state;
        //console.log(selectMovie)
        //console.log(comments["1"].idComment)
        return (
            <section className="home" id="home">
                {selectMovie.map(item =>
                    <Sidebar key={item.id} {...item} />
                )}
                <div className="home-primary">
                    <div className="comments-container">
                        <CommentBox useComment={term => this.viewComment(term)} />
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