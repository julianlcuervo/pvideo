import React, { Component } from 'react';
import '../assets/styles/components/Sidebar.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.cover = props.cover;
        this.title = props.title;
        this.year = props.year;
        this.contentRating = props.contentRating;
        this.duration = props.duration;
        this.gender = props.gender;
        this.description = props.description;
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-item">
                    <img className="sidebar-item__img" src={this.cover} alt="item" />

                </div>
                <div className="sidebarPlaylist">
                    <h2 className="sidebarPlaylist-title">{this.title}</h2>
                    <ul className="playlistFriends">
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Año:  </strong>{this.year}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Genero:  </strong>{this.gender}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Rango de edad:  </strong>{this.contentRating}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Duración:  </strong>{this.duration}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Descripción:  </strong>{this.description}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Descripción:  </strong>{this.description}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Descripción:  </strong>{this.description}
                                </span>
                            </a>
                        </li>
                        <li className="playlistFriends-item">
                            <a href="#">
                                <span>
                                    <strong>Descripción:  </strong>{this.description}
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