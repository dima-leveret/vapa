import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import '../profile/Profile.css';

import avatarPlaceholder from "../../img/avatar_placeholder.png"

import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile';

import { BsCardImage } from 'react-icons/bs'


class Profile extends React.Component {

    state = {
        user: null,
        authSubscription: null,
        file: null, 
        downloadURL: '',
    }

    componentDidMount() {
        const authSubscription = 
        firebase.auth()
            .onAuthStateChanged(user => {
            
                const currentUser = firebase.auth().currentUser
                console.log(currentUser);

            console.log('onAuthStateChanged');
            this.setState({
                user
            })
        })
        this.setState({ 
            authSubscription 
        })

        
    }

    componentDidUpdate() {
        if (this.state.user) {
            firebase.storage().ref(`avatars/${this.state.user.uid}`)
                .getDownloadURL()
                .then(downloadURL => this.setState({ downloadURL }))
        }
    }

    componentWillUnmount() {
        this.state.authSubscription && this.state.authSubscription(); 
    }
    
    handleOnChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    handelOnSubmit = (event) => {
        event.preventDefault();
        
        firebase.storage().ref(`avatars/${this.state.user.uid}`).put(this.state.file)
            .then(snapshot => {
                snapshot.ref.getDownloadURL()
                    .then((downloadURL) => {
                        this.setState({
                            downloadURL,
                            file: null
                        })
                    })
            })
    }
 
    render() {
        return (
            <div className='profileBody' >
            {
                this.state.user
                ? <div className='profileContainer' >
                    <p>Your profile</p>
                    <p>Wellcome {this.state.user.email} ! </p>
                    <img
                    src={this.state.downloadURL || avatarPlaceholder} 
                    alt='avatar' 
                    className="avatartImg" />

                    <p> { this.state.file && this.state.file.name } </p>
                    <Form onSubmit={this.handelOnSubmit} >
                        <FormFile.Input
                        accept='image/*'
                        id='avatar'
                        type='file'
                        onChange={this.handleOnChange}
                        />
                        <FormFile.Label htmlFor='avatar' >
                            <Button variant='secondary' >
                                <BsCardImage/>
                            </Button>
                        </FormFile.Label>
                        {this.state.file && 
                        (<Button variant='warning' type='submit' >
                            Upload
                        </Button>
                        )}
                        
                    </Form>
                    
                    {/* <input
                    accept="image/*"
                    id="avatar"
                    type="file"
                    onChange={this.handleOnChange}
                    />
                    <label htmlFor="avatar">
                        <Button variant="secondary">
                            Upload
                        </Button>
                    </label> */}

                </div>
                : <div className='profileContainer' >
                You are not logged in. Please <Link to="sign-in"> sign in</Link>
                </div>
            }
                 
            </div>
        ) 
    }
}

export default Profile;