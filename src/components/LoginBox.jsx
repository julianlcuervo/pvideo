import React, { Component } from 'react';
import '../assets/styles/components/LoginBox.scss';
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.useRegister = this.useRegister.bind(this);
        this.state = {
            fields: {},
            errors: {}
          }
    
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

    //Validaciones Email
    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Campo obligatorio, no puede estar vacio";
      }
      if (typeof fields["email"] !== "undefined") {
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Correo inválido";
        }
      }
      //Validar campo contraseña
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Campo obligatorio, no puede estar vacio";
      }
      this.setState({ errors: errors });
      return formIsValid;
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
    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
        } else {
          swal("Errores en el formulario","","error")
        }
      }
    
      handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
      }
    

    render() {
        return (
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={this.contactSubmit.bind(this)}>
                    <input id="email" type="search" className="input" placeholder="Correo"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                    
                    <h6 style={{ color: "white" }}>{this.state.errors["email"]}</h6>
                    <input id="password" className="input" type="password" placeholder="Contraseña" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                    
                    <h6 style={{ color: "white" }}>{this.state.errors["password"]}</h6>
                    <div className="col-md-12">
                        <br></br>
                        <br></br>
                        <button className="comment-button" id="buttonRegister" value="Ingresar" onClick={this.useRegister}>Iniciar sesión</button>
                    </div>  
                </form>
                   
          
                <p className="login__container--register">
                    No tienes ninguna cuenta
                <Link to="/register">
                <br></br>
                        Regístrate
                </Link>
                </p>
            </section>
        )
    }
}

export default LoginBox;