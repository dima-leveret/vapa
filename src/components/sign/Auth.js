import React from 'react';
import firebase from 'firebase';

class Auth extends React.Component {
    state = {
        user: null,
        userData: null,
        authSubscription: null,
    }

    componentDidMount() {
        const authSubscription = firebase.auth().onAuthStateChanged(user => {
            console.log('onAuthStateChanged', user);
            this.setState ({ user })

            if (this.state,user) {
                const userUid  = firebase.auth().currentUser.uid
                firebase.database().ref('users/' + userUid).get()
                .then((userData) => {
                    this.setState({
                        userData: userData.val()
                    })
                    console.log( 'user info:',  this.state.userData);
                })
            }
            
        })



        this.setState({ authSubscription })

    }

    componentWillUnmount() {
        this.state.authSubscription && this.state.authSubscription();
    }

    render () {
        return this.props.children({ 
            user: this.state.user, 
            userData: this.state.userData })
    }
}

export default Auth;