import React from 'react';
import '../assets/styles/components/Commentary.scss';
import userIcon from '../assets/static/user-icon.png';

const Commentary = ({title,description}) => (
    <div>
        <li>
            <div className="comment-main-level">
            <div className="comment-avatar"><img src={userIcon} alt=""/></div>
                <div className="comment-box">
                    <div className="comment-head">
                        <h6 className="comment-name">{title}</h6>
                        <i className="fa fa-reply"></i>
                        <i className="fa fa-heart"></i>
                    </div>
                    <div className="comment-content">
                        {description}
                    </div>
                </div>
            </div>
        </li>
    </div>
);

export default Commentary;