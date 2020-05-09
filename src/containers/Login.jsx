import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginBox from '../components/LoginBox'
import '../assets/styles/components/Login.scss'
import swal from 'sweetalert';

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/Login/'
const APIuser = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'
class Login extends Component {

  sendAuthorization(term) {
    fetch(API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Password: term[1],
        Email: term[0]
      })
    })
      .then(response => response.json())
      .then(data => this.Authorization(data))
  }

  Authorization(term){
    if(term[0] == 'Credenciales incorrectas'){
      alert('Información Invalida')
    } else if(term[0] == 'No existe el usuario'){
      alert('Información Invalida')
    } else {
      fetch(APIuser)
            .then(response => response.json())
            .then(data => this.user(data.filter(item =>
              item.Email == term.Email
          )))
      //this.props.history.push('/home/')
    }
  }

  user(data){
    swal("Inicio de Sesión exitoso","","success");
    //swal("Inicio de Sesión exitoso");
    this.props.history.push('/home/'+data[0].IDUser,false)
  }


  render() {
    return (
      <section className="login">
        <LoginBox useLogin={term => this.sendAuthorization(term)} />
      </section>
    )
  }
}


/*<section className="login__container--social-media">
        <div><img src={googleIcon}/> Inicia sesión con Google</div>
        <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
      </section>*/

export default Login;
