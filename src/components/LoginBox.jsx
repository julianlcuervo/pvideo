import React, { Component } from 'react';
import '../assets/styles/components/LoginBox.scss';
import { Link } from 'react-router-dom'

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.useRegister = this.useRegister.bind(this);
    }

    useRegister() {
        let email = document.getElementById("email");
        let password = document.getElementById("password")
        if (email && password) {
            if (email.value !== "" && password.value !== "") {
                this.props.useLogin([email.value, password.value])
            }
        }
    }

    render() {
        return (
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form">
                    <input id="email" type="search" className="input" placeholder="Correo" />
                    <input id="password" className="input" type="password" placeholder="Contraseña" />
                    <input id="buttonRegister" onClick={this.useRegister} type="button" className="comment-button" value="Ingresar" />
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
}

export default LoginBox;