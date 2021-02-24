import React from 'react';

import firebase from 'firebase';

import '../sign/Sign.css'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Sign extends React.Component {

    state = {
        email: '',
        password: '',
    }


    handleOnChange = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => alert('Signed in!'))
            .catch((error) => alert(error.message))
    }


    render() {
        return(
            <div className='form-container'>
            <Form className='form' onSubmit={this.handleOnSubmit} >
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
                    Sign In
                </Button>
             </Form>
            </div>
        )
    }
}

export default Sign;