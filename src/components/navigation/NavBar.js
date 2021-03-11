import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';

import '../navigation/NavBar.css';

// import { FiInstagram } from 'react-icons/fi';

import Button from 'react-bootstrap/Button'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import WhiteVapaLogo from '../../img/white_vapa_logo.svg';

import AboutVapa from '../content/AboutVapa';
import Contacts from '../content/Contacts';
import Partners from "../partners/Partners";
import PaymentAndDelivery from '../content/PaymentAndDelivery';
import Sign from '../sign/Sign';

import ShoppingCard from "../shoppingCard/ShoppingCard"
import Home from '../home/Home';



 class NavBar extends React.Component {

    state = {
        user: null,
        // authSubscription: null, 'static nav is not requared unmounting'
    }

    componentDidMount() {
        // const authSubscription = 'static nav is not requared unmounting'
        firebase.auth()
            .onAuthStateChanged(user => {
            console.log('onAuthStateChanged');
            this.setState({
                user
            })
        })
        // this.setState({ 'static nav is not requared unmounting'
        //     authSubscription 
        // })
    }

    // componentWillUnmount() {
    //     this.state.authSubscription && this.state.authSubscription(); 'static nav is not requared unmounting'
    // }

    signOut = () => {
        firebase.auth().signOut()
    }

    render () {
        return(
            <>
                <Navbar className='navBar'>
                    <Link to='/vapa' >
                        <Navbar.Brand 
                        className='navBrand'
                         >
                            <Image 
                            className="navBrandImage" 
                            src={WhiteVapaLogo} alt={'vapa_logo'} />
                        </Navbar.Brand>
                    </Link> 
                    <Nav  className='nav' >
                        <Link  to='/aboutVapa' className='navLink' >
                            About Vapa
                        </Link>
                                
                        <Link to='/contacts' className='navLink' >
                            Contacts
                        </Link>
            
                        <Link to='/partners' className='navLink' >
                            Partners
                        </Link>
            
                        <Link to='/paymentAndDelivery' className='navLink' >
                            Payment and delivery
                        </Link>
                    </Nav>
                    <ShoppingCard/>
                    

                    {this.state.user
                    ?
                    <div>
                        <p style={{ color: "white", backgroundColor: "grey" }} >Wellcome <br/> {this.state.user.email}</p>
                        <Button
                        onClick={this.signOut} 
                        variant='warning' 
                    >Sign out</Button>
                    </div>
                    
                    : 
                    <Link to='/sign-in'  className='navLink'>
                        <Button variant='success' >Sign in</Button>
                    </Link>
                    }

                    {/* <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                        <FiInstagram className='instaIcon' />
                    </a> */}
                </Navbar>
            
                {/* <Switch>
                    <Route exact path='/home' >
                        <Home/>
                    </Route>
            
                    <Route path='/aboutVapa' >
                        <AboutVapa />
                    </Route>
            
                    <Route path='/contacts' >
                        <Contacts />
                    </Route>
            
                    <Route path='/partners' >
                        <Partners />
                    </Route>
            
                    <Route path='/paymentAndDelivery' >
                        <PaymentAndDelivery />
                    </Route>
    
                    <Route path='/sign-in' >
                        <Sign/>
                    </Route>

                    <Route path='/sign-up' >
                        <Sign isSignUp/>
                    </Route>
            
                </Switch> */}
            </>
        )

    }
    
}

export default NavBar;