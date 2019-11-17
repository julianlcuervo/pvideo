import React, { Component } from 'react';
import '../assets/styles/components/Sidebar.scss';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.cover=props.cover;
        this.title=props.title;
    }
    render() {
        return (
            <div className="sidebar">
                <div className="carousel-item">
                    <img className="carousel-item__img" src={this.cover} alt="item" />
                    <div className="carousel-item__details">
                    </div>
                </div>
                <div className="sidebarPlaylist">
                    <h2 className="sidebarPlaylist-title">{this.title}</h2>
                    <ul className="playlistFriends">
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    Año
                        </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    descripción
                        </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    Actores
                        </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Sidebar;