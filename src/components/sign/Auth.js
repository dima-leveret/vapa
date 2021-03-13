import React from 'react';
import { Link } from 'react-router-dom'
import firebase from 'firebase';

class Auth extends React.Component {
    state = {
        user: null,
        authSubscription: null,
    }

    componentDidMount() {
        const authSubscription = firebase.auth().onAuthStateChanged(user => {
            this.setState ({ user })
        })

        this.setState({ authSubscription })
    }

    componentWillUnmount() {
        this.state.authSubscription && this.state.authSubscription();
    }

    render () {
        return (
            this.state.user 
            ? this.props.children
            : <div style={{ color: 'white' }} >
                Yuo are not logged in. Please <Link to="sign-in"> sign in</Link>.
            </div>
        )
    }
}

export default Auth;