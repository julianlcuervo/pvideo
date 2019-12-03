import React from 'react';
import '../assets/styles/components/CommentBox.scss';
import userIcon from '../assets/static/user-icon.png';

const CommentBox = (props) => {
    let user = document.getElementById("user");
    let text = document.getElementById("text");
    let button = document.getElementById("button");

    if(user && text){
        button.addEventListener("click",useComment)
    }
    function useComment(){
        if(user.value !== "" && text.value !== ""){
        let x = user.value;
        let y = text.value;
        props.useComment([user.value,text.value])
        }
    }
    return (
        <header className="header-commet">
            <div className="comment-container">
                <input id="user" type="search" className="comment-bar-user" placeholder="Usuario" />
                <input id="text" type="search" className="comment-bar-text" placeholder="Comentario" />
            </div>
            <input id="button" type="button" className="comment-button" value="Comentar" />
        </header>
    )
}

export default CommentBox;