import React from 'react';
import '../assets/styles/components/RegisterBox.scss';
import userIcon from '../assets/static/user-icon.png';

const RegisterBox = (props) => {

    function useRegister() {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password")
        if (name && email && password) {
            if (name.value !== "" && email.value !== "" && password.value !== "") {
                props.useRegister([name.value,email.value,password.value])
            }
        }
    }
    return (
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input id="name" type="search" className="input" placeholder="Nombre" />
                <input id="email" type="search" className="input" placeholder="Correo" />
                <input id="password" className="input" type="password" placeholder="Contraseña" />
            </form>
            <input id="button" onClick={useRegister} type="button" className="comment-button" value="Registrar" />
        </section>
    )
}

export default RegisterBox;