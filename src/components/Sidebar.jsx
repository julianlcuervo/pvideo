import React from 'react';
import '../assets/styles/components/Sidebar.scss';

const Sidebar = ({cover,title}) => (
    <div className="sidebar">
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt="item" />
            <div className="carousel-item__details">
            </div>
        </div>
        <div className="sidebarPlaylist">
            <h2 className="sidebarPlaylist-title">{title}</h2>
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

export default Sidebar;