import React from 'react';
import { Redirect, Link } from 'react-router-dom'

import firebase from 'firebase';

import '../sign/Sign.css'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Sign extends React.Component {

    state = {
        email: '',
        password: '',
        redirect: false, 
    }


    handleOnChange = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                alert('Signed in!');
                this.setState({
                    redirect: true
                });
            })
            .catch((error) => alert(error.message))
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                alert('Signed in!');
                this.setState({
                    redirect: true
                });
            })
            .catch((error) => alert(error.message))
        }
        
    }


    render() {

        const {isSignUp} = this.props;

        if(this.state.redirect) {
            return <Redirect to="/home" />
        }

        return(
            <div className='form-container'>
            <Form className='form' onSubmit={this.handleOnSubmit} >
            <h2> {isSignUp ? 'Sign up' : 'Sign in'} </h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange} 
                    type="email" 
                    placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleOnChange} 
                    type="password" 
                    placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                {isSignUp ? 'Sign up' : 'Sign in'}
                </Button>
                <br/>
                <br/>
                {isSignUp
                ?
                <Link to="sign-in" >Already have an account? Sign in!</Link>
                :
                <Link to="sign-up" >Don`t have an account? Sign up!</Link>
                }
             </Form>
            </div>
        )
    }
}

export default Sign;