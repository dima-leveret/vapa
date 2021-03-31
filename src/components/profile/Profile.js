import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import Auth from '../sign/Auth';

import SetUserData from '../sign/SetUserData';
import EditUserData from './EditUserData'

import '../profile/Profile.css';

import avatarPlaceholder from "../../img/avatar_placeholder.png"

import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile'

import { BsCardImage } from 'react-icons/bs'


class Profile extends React.Component {

    state = {
        // user: null,
        // authSubscription: null,
        file: null, 
        avatarURL: '',
        showEditUserModal: false,
        // nick: '',
    }

    openEditUserModal = () => {
        this.setState({
            showEditUserModal: true
        })
    }

    closeEditUserModal = () =>{
        this.setState({
            showEditUserModal: false
        })
    }


    // componentDidMount() {
    //     const authSubscription = 
    //     firebase.auth()
    //         .onAuthStateChanged(user => {
            
    //             const currentUser = firebase.auth().currentUser
    //             console.log(currentUser);

    //         console.log('onAuthStateChanged');
    //         this.setState({
    //             user
    //         })
    //     })
    //     this.setState({ 
    //         authSubscription 
    //     })
        

        
    // }

    // componentDidUpdate() {
    //     if (this.state.user) {
    //         firebase.storage().ref(`avatars/${firebase.auth().currentUser.uid}`)
    //             .getDownloadURL()
    //             .then(avatarURL => this.setState({ avatarURL }))
    //     }
    // }

    // componentWillUnmount() {
    //     this.state.authSubscription && this.state.authSubscription(); 
    // }
    
    handleOnChange = (event) => {
        // this.setState({
        //     file: event.target.files[0]
        // })
    }

    handelOnSubmit = (event) => {
        event.preventDefault();
        
        // firebase.storage().ref(`avatars/${this.state.user.uid}`).put(this.state.file)
        //     .then(snapshot => {
        //         snapshot.ref.getDownloadURL()
        //             .then((avatarURL) => {
        //                 this.setState({
        //                     avatarURL,
        //                     file: null
        //                 })
        //             })
        //     })
    }

    
 
    render() {
        return (
            <>
            <Auth>
                {
                    ({  user, userData }) => {
                        return (
                            <div className='profileBody'>
                                {
                                user
                                ? <div className='profileContainer' >
                                    {
                                        userData
                                        ?
                                        <div>
                                            <p>Wellcome to VAPA user profile! </p>
                                            <p>Yuor name {userData.userName} </p>
                                            <p>Your surname is {userData.userSurname} </p>
                                            <p>Your city is {userData.city} </p>
                                            <p>Your parcel locker number is {userData.parcelLocker} </p>
                                            <p>Your phone number is {userData.phoneNr} </p>
                                            <p>Your post office number is {userData.postOfficeNr} </p>
                                            <p>Your postcode is {userData.postcode} </p>
                                            <Button
                                            onClick={this.openEditUserModal}
                                            >Edit user data</Button>
                                            <EditUserData
                                            showEditUserModal={this.state.showEditUserModal}
                                            onHide={this.closeEditUserModal}
                                            closeEditUserModal={this.closeEditUserModal}

                                            userName={userData.userName}
                                            userSurname={userData.userSurname}
                                            city={userData.city}
                                            parcelLocker={userData.parcelLocker}
                                            phoneNr={userData.phoneNr}
                                            postOfficeNr={userData.postOfficeNr}
                                            postcode={userData.postcode}
                                            />
                                        </div>
                                        :
                                        <div>
                                                <p>Your email is {user.email} </p>
                                                <p>Your uid is {user.uid} </p>
                                                <p>Update your information</p>
                                                <SetUserData/>
                                            </div>
                                    }
                                    
                                    
                                    {/* <img
                                    src={this.state.avatarURL || avatarPlaceholder} 
                                    alt='avatarka' 
                                    className="avatartImg" />

                                    <Form onSubmit={this.handelOnSubmit} >
                                        <Form.File>
                                            <FormFile.Input
                                                accept='image/*'
                                                id='avatar'
                                                type='file'
                                                lable='choose your photo'
                                                onChange={this.handleOnChange}
                                                />

                                                {this.state.file && 
                                                (<Button variant='warning' type='submit' >
                                                    Upload
                                                </Button>
                                                )}
                                        </Form.File>

                                    </Form>
                                    <p> { this.state.file && this.state.file.name } </p> */}

                                    </div>

                                    : <div className='profileContainer' >
                                        You are not logged in. Please <Link to="sign-in"> sign in</Link>
                                    </div>
                            }    
                            </div>
                        )
                    }
                }
            </Auth>

        </>
        ) 
    }
}

export default Profile;