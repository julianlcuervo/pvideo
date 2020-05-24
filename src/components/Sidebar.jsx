import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../assets/styles/components/Sidebar.scss';
import { withRouter } from "react-router-dom";


const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
const APIrating = "http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Rating/"

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.id = props.id
        this.cover = props.cover;
        this.title = props.title;
        this.year = props.year;
        this.contentRating = props.contentRating;
        this.duration = props.duration;
        this.gender = props.gender;
        this.description = props.description;
        this.language = props.language;
        this.state = {
            rating: this.duration.toFixed(1),
            ratingNow: this.duration,
            stateEditing: true,
            stateAux: false,
            information: []
        };
        this.idMovie = this.props.match.params.idMovie
        this.idUser = this.props.match.params.idUser
    }

    componentDidMount(){
        fetch(APIrating)
        .then(response => response.json())
        .then(data => this.setState({
            information : data.filter(item =>
                    item.user_id == this.idUser
                    &&
                    item.movie_id == this.idMovie
                )
        }))

    }

    componentDidUpdate() {
        const { rating } = this.state;
        //console.log(rating)
        fetch(API + this.id + "/", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                duration: rating
            })
        })


    }


    onStarClick(nextValue, prevValue, name) {
        this.setState({
            ratingNow: nextValue,
            rating: ((this.duration + nextValue) / 2).toFixed(1),
            stateEditing: false
        });
    }

    render() {
        const { rating } = this.state;
        const { ratingNow } = this.state;
        const { stateEditing } = this.state;
        const { stateAux } = this.state;
        const { information } = this.state;

        try{
            const { information } = this.state;
            if(information.length > 0){

                this.setState({
                    stateEditing : false,
                    stateAux : false
                })
            } else{
                this.setState({
                    stateAux : true
                })
            } 
            
        }catch(error){
        }

        console.log(information.length)

        console.log(stateEditing,stateAux)

        

        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <img className="sidebar-item__img" src={this.cover} alt="item" />
                </div>
                <div>
                    <h3>Calificación: {rating}</h3>
                    <div style={{ fontSize: 25 }}
                        onClick={
                            event => this.props.onDoRating([this.idUser,this.idMovie,stateEditing,stateAux])
                        }>
                        <StarRatingComponent
                            name="rate1"
                            starCount={10}
                            value={ratingNow}
                            editing={stateEditing}
                            onStarClick={
                                this.onStarClick.bind(this)
                            }
                        />
                    </div>
                </div>
                <div className="sidebarPlaylist">
                    <h2 className="sidebarPlaylist-title">{this.title}</h2>
                    <ul className="playlistFriends">
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Año:  </strong>{this.year}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Genero:  </strong>{this.gender}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Rango de edad:  </strong>{this.contentRating}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Duración:  </strong>{this.duration} minutos
                                </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Lenguaje:  </strong>{this.language}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Descripción:  </strong>{this.description}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default withRouter(Sidebar);