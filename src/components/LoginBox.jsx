import React from 'react';
import '../assets/styles/components/LoginBox.scss';
import { Link } from 'react-router-dom'

const LoginBox = (props) => {

    function useRegister() {
        let email = document.getElementById("email");
        let password = document.getElementById("password")
        if (email && password) {
            if (email.value !== "" && password.value !== "") {
                props.useLogin([email.value, password.value])
            }
        }
    }

    return (
        <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form">
                <input id="email" type="search" className="input" placeholder="Correo" />
                <input id="password" className="input" type="password" placeholder="Contraseña" />
                <input id="buttonRegister" onClick={useRegister} type="button" className="comment-button" value="Ingresar" />
            </form>

            <p className="login__container--register">
                No tienes ninguna cuenta
                <Link to="/register">
                    Regístrate
                </Link>
            </p>
        </section>
    )
}

export default LoginBox;