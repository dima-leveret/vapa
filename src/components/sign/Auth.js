import React from 'react';
import firebase from 'firebase';

class Auth extends React.Component {
    state = {
        user: null,
        authSubscription: null,
    }

    componentDidMount() {
        const authSubscription = firebase.auth().onAuthStateChanged(user => {
            console.log('onAuthStateChanged', user);
            this.setState ({ user })
        })

        this.setState({ authSubscription })
    }

    componentWillUnmount() {
        this.state.authSubscription && this.state.authSubscription();
    }

    render () {
        return this.props.children({ user: this.state.user })
    }
}

export default Auth;