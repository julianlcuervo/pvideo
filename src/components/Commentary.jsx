import React from 'react';
import '../assets/styles/components/Commentary.scss';
import userIcon from '../assets/static/user-icon.png';

const Commentary = ({ userName, text }) => (
    <div>
        <li>
            <div className="comment-main-level">
                <div className="comment-avatar"><img src={userIcon} alt="" /></div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name">{userName}</h6>
                        <i className="fa fa-reply"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="comment-content">
                        {text}
                    </div>
                </div>
            </div>
        </li>
    </div>
);

export default Commentary;