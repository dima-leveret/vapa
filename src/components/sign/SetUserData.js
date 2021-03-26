import React from 'react';
import firebase from 'firebase';

import { Redirect, Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SetUserData extends React.Component {

    state = {
        userName: '',
        userSurname: '',
        city: '',
        parcelLocker: '',
        phoneNr: '',
        postOfficeNr: '',
        postcode: '',

    }

    hanldeOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleOnSubmit = (event) => {
        event.preventDefault()

        const userUid  = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userUid).set({
            userName: this.state.userName,
            userSurname: this.state.userSurname,
            city: this.state.city,
            parcelLocker: this.state.parcelLocker,
            phoneNr: this.state.phoneNr,
            postOfficeNr: this.state.postOfficeNr,
            postcode: this.state.postcode,
        })

        this.setState({
            userName: '',
            userSurname: '',
            city: '',
            parcelLocker: '',
            phoneNr: '',
            postOfficeNr: '',
            postcode: '',
        })
        
        
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleOnSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        value={this.state.userName}
                        onChange={this.hanldeOnChange}
                        name='userName'
                        type="name" 
                        placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                        value={this.state.userSurname}
                        onChange={this.hanldeOnChange}
                        name='userSurname' 
                        type="name" 
                        placeholder="Surname" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        value={this.state.city}
                        onChange={this.hanldeOnChange}
                        name='city' 
                        type="name" 
                        placeholder="City" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Parcel locker</Form.Label>
                        <Form.Control
                        value={this.state.parcelLocker}
                        onChange={this.hanldeOnChange}
                        name='parcelLocker' 
                        type="name" 
                        placeholder="Parcel locker" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                        value={this.state.phoneNr}
                        onChange={this.hanldeOnChange}
                        name='phoneNr' 
                        type="name" 
                        placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Post office number</Form.Label>
                        <Form.Control
                        value={this.state.postOfficeNr}
                        onChange={this.hanldeOnChange}
                        name='postOfficeNr' 
                        type="name" 
                        placeholder="Post office number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control
                        value={this.state.postcode}
                        onChange={this.hanldeOnChange}
                        name='postcode' 
                        type="name" 
                        placeholder="Postcode" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }

}

export default SetUserData;