import React, { Component } from 'react';
import '../assets/styles/components/RegisterBox.scss';
import { Link } from 'react-router-dom'
import userIcon from '../assets/static/user-icon.png';


class RegisterBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.useRegister = this.useRegister.bind(this);
    //this.term = this.props;
    
    
    //console.log(this.term.useRegister)
    //this.useRegister = props.useRegister.bind();
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Validaciones nombre
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Campo obligatorio, no puede estar vacio";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Caracteres inválidos";
      }
    }

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
  //Alerta del formulario
  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Registro exitoso");
    } else {
      alert("Errores en el formulario")
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  useRegister() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password")
    if (name && email && password) {
      if (name.value !== "" && email.value !== "" && password.value !== "") {
        this.props.useRegister([name.value, email.value, password.value])
      }
    }
  }


  render() {
    return (
      <section className="register__container" >
        <h2>Registrate!</h2>
        <form name="contactform" className="register__container--form" onSubmit={this.contactSubmit.bind(this)}>
          <div className="col-md-6">
            <input id="name" type="search" placeholder="Nombre" className="input" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
            <br></br>
            <h6 style={{ color: "white" }}>{this.state.errors["name"]}</h6>
            <br />
            <input id="email" type="search" placeholder="Email" className="input" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
            <br></br>
            <h6 style={{ color: "white" }}>{this.state.errors["email"]}</h6>
            <br />
            <input id="password" type="password" placeholder="Contraseña" className="input" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
            <br></br>
            <h6 style={{ color: "white" }}>{this.state.errors["password"]}</h6>
          </div>
          <div className="col-md-12">
            <button className="comment-button" id="buttonRegister" value="Registrar" onClick={this.useRegister}>Registrarse</button>
          </div>
          <p className="login__container--register">
                Iniciar Sesión
                <Link to="/login">
                    LogIn
                </Link>
            </p>
        </form>
      </section>

    )
  }
}

export default RegisterBox;
