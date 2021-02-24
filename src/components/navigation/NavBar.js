import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../navigation/NavBar.css';

import { FiInstagram } from 'react-icons/fi';

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



 function NavBar() {

    return(
        <>
            <Navbar className='navBar'>
                <Link to='/home' >
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
                <Link to='/sign-in'  className='navLink'>
                    Sign in
                </Link>
                <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                    <FiInstagram className='instaIcon' />
                </a>
            </Navbar>
        
            <Switch>
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
        
            </Switch>
        </>
    )

    
}

export default NavBar;