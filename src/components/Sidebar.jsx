import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../assets/styles/components/Sidebar.scss';
import { withRouter } from "react-router-dom";

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Movie/';
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
            rating: this.duration,
            ratingNow: this.duration,
            stateEditing: true
        };
        console.log(this.props.match.params.idMovie)
        console.log(this.props.match.params.idUser)
    }


    onStarClick(nextValue, prevValue, name) {
        this.setState({ 
            ratingNow: nextValue,
            rating: Math.floor((this.duration+nextValue)/2),
            stateEditing: false 
        });
        //this.props.history.push(true)
        //console.log(rating)
        //this.men();
    }

    render() {
        const { rating } = this.state;
        const { ratingNow } = this.state;
        const { stateEditing } = this.state;
        
        fetch(API+this.id+"/", {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                duration: Math.floor(rating)
            })
        })

        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <img className="sidebar-item__img" src={this.cover} alt="item" />
                </div>
                <div>
                    <h3>Calificación: {rating}</h3>
                    <StarRatingComponent
                        name="rate1"
                        starCount={10}
                        value={ratingNow}
                        editing={stateEditing}
                        onStarClick={this.onStarClick.bind(this)}
                    />
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