import React from 'react';
import '../assets/styles/components/CommentBox.scss';
import userIcon from '../assets/static/user-icon.png';

const CommentBox = (props) => {
    let text = document.getElementById("text");
    let button = document.getElementById("button");

    if(text){
        button.addEventListener("click",useComment);
    }
    function useComment(){
        if(text.value !== ""){
        props.useComment(text.value)
        }
    }
    return (
        <header className="header-commet">
            <div className="comment-container">
                <input id="text" type="search" className="comment-bar-text" placeholder="Comentario" />
            </div>
            <input id="button" type="button" className="comment-button" value="Comentar" />
        </header>
    )
}

export default CommentBox;