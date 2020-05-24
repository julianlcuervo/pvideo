import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Commentary from '../components/Commentary';
import CommentBox from '../components/CommentBox';
import '../assets/styles/components/Bloc.scss';
import '../assets/styles/App.scss';
import swal from 'sweetalert';
import { userInfo } from 'os';

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
const APIcomments = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Comment/';
const APIuser = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'
const APIrating = "http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Rating/"

class Bloc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: [],
            selectMovie: [],
            comments: [],
            stateComment: '',
            selectUser: [{}],
            aux : true
        };
        this.id = this.props.match.params.idMovie;
        this.idUser = this.props.match.params.idUser;
        //console.log(this.props)
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
        fetch(APIuser)
            .then(response => response.json())
            .then(data => this.setState({
                selectUser: data.filter(item =>
                    item.IDUser == this.idUser
                )
            }))
        if (this.props.location.state == undefined) {
            this.props.history.push('/login')
        }
    }

    viewComment(term) {
        const { stateComment } = this.state;
        const { selectUser } = this.state;
        console.log(selectUser[0].Name)
        const name = selectUser[0].Name;
        const email = selectUser[0].Email;
        if (stateComment !== term) {
            this.setState({ stateComment: term })

            fetch(APIcomments, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idMovie: this.id,
                    text: term,
                    userName: name + " - " + email
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

    doFetch(term){
        const { aux } = this.state;
        console.log(aux)
        if(term[2]==false && term[3]==true && aux==true){
        fetch(APIrating, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: term[0],
                movie_id: term[1],
                rating: false
            })
        }).then((response)=>{
            if(response.status == 201){
                swal("Gracias por tu calificación", "", "success")
            }
        })
        swal("Cargando, por favor espere...", "", "warning")
        this.setState({
            aux : false
        })
        //console.log(term[2])
            
        }else (console.log("es falso"))
        
    }

    render() {
        const { initialState } = this.state;
        const { selectMovie } = this.state;
        const { comments } = this.state;
        const { selectUser } = this.state;

        //console.log(selectUser[0].Name)
        //console.log(comments["1"].idComment)
        return (
            <section className="home" id="home">
                {selectMovie.map(item =>
                    <Sidebar
                        key={item.id} {...item}
                        onDoRating={term => this.doFetch(term)}
                    />
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