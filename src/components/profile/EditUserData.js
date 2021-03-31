import React from 'react';
import firebase from 'firebase';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class EditUserData extends React.Component {

    state = {
        userName: this.props.userName,
        userSurname: this.props.userSurname,
        city: this.props.city,
        parcelLocker: this.props.parcelLocker,
        phoneNr: this.props.phoneNr,
        postOfficeNr: this.props.postOfficeNr,
        postcode: this.props.postcode,
    }

    hanldeOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        // event.preventDefault();

        const userUid  = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userUid).update({
            userName: this.state.userName,
            userSurname: this.state.userSurname,
            city: this.state.city,
            parcelLocker: this.state.parcelLocker,
            phoneNr: this.state.phoneNr,
            postOfficeNr: this.state.postOfficeNr,
            postcode: this.state.postcode,
        })

        this.props.closeEditUserModal();
    }


    render () {
        return(
            <>
            <Modal
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.showEditUserModal}
            onHide={this.props.onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Edit the product {this.props.productName} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                        <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Button 
                            variant="primary" 
                            type="submit">
                                Save
                            </Button>

                            <Button 
                            onClick={this.props.closeEditUserModal}
                            variant="primary">
                                Close
                            </Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
            </Modal>
                
            </>
        )
    }
}

export default EditUserData;