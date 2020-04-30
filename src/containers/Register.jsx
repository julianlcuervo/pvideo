import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterBox from '../components/RegisterBox';
import '../assets/styles/components/Register.scss';

const API = 'http://ec2-18-206-124-96.compute-1.amazonaws.com:8000/api/User/'; 
class Register extends Component {
    
    sendRegister(term){
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