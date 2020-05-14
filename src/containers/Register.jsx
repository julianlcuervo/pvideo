import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterBox from '../components/RegisterBox';
import '../assets/styles/components/Register.scss';
import swal from 'sweetalert';

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'; 
class Register extends Component {
    
    sendRegister(term){
        console.log(term)
        fetch(API, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Name: term[0],
                Email: term[1],
                Password: term[2]
            })
        })
        .then(response => response.json())
        .then(data => this.Register(data))
    }


    Register(term){
        if(term["Email"][0] == 'Este correo ya se encuentra registrado.'){
            swal(term["Email"][0], "", "error");
        }else{
            swal("Registro exitoso ", "", "success");
            this.props.history.push('/login')
        }

    }



    render() {
        return (
            <section className="register" >
                <RegisterBox useRegister={term => this.sendRegister(term)}/>
            </section>
        )
    }
}


export default Register;