import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import '../profile/Profile.css';

import avatarPlaceholder from "../../img/avatar_placeholder.png"
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile';


class Profile extends React.Component {

    state = {
        user: null,
        authSubscription: null, 
    }

    componentDidMount() {
        const authSubscription = 
        firebase.auth()
            .onAuthStateChanged(user => {
            console.log('onAuthStateChanged');
            this.setState({
                user
            })
        })
        this.setState({ 
            authSubscription 
        })
    }

    componentWillUnmount() {
        this.state.authSubscription && this.state.authSubscription(); 
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
                    src={avatarPlaceholder}
                    alt='avatar' 
                    className="avatartImg" />
                    {/* <Form>
                        <FormFile.Input
                        accept='image/*'
                        id='avatar'
                        />
                        <FormFile.Label htmlFor='avatar' >
                            <Button variant='secondary' >
                                Upload
                            </Button>
                        </FormFile.Label>
                    </Form> */}
                    
                    <input
                    accept="image/*"
                    id="avatar"
                    type="file"
                    />
                    <label htmlFor="avatar">
                        <Button variant="secondary" >
                            Upload
                        </Button>
                    </label>

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