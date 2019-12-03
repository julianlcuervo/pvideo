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
        this.language = props.language;
        this.reparto = props.reparto;
        this.pais = props.pais;
        this.director = props.director;
        this.festreno = props.festreno;
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
                                <strong>Pais:  </strong>{this.pais}
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
                                <strong>Director:  </strong>{this.director}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Reparto:  </strong>{this.reparto}
                            </span>
                        </li>
                        <li className="playlistFriends-item">
                            <span>
                                <strong>Fecha de estreno:  </strong>{this.festreno}
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

export default Sidebar;