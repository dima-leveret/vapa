import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import '../navigation/NavBar.css';

import { FiInstagram } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import DarkVapaLogo from '../../img/dark_vapa_logo.svg';

import AboutVapa from '../content/AboutVapa';
import Contacts from '../content/Contacts';
import Partners from "../partners/Partners";
import PaymentAndDelivery from '../content/PaymentAndDelivery';

import Home from '../home/Home';
import ShoppingCard from "../shoppingCard/ShoppingCard"



 function NavBar() {

    return(
        <>
            <Navbar className='navBar'>
                <Link to='/home' >
                    <Navbar.Brand className='navBrand' >
                        <img className="navBrandImage" src={DarkVapaLogo} alt={'vapa_logo'} />
                    </Navbar.Brand>
                </Link> 
                <Nav  className='nav' >
                    <Link  to='/aboutVapa' className='navLink' >
                        Про Vapa
                    </Link>
                            
                    <Link to='/contacts' className='navLink' >
                        Контакты
                    </Link>
        
                    <Link to='/partners' className='navLink' >
                        Партнери
                    </Link>
        
                    <Link to='/paymentAndDelivery' className='navLink' >
                        Оплата та доставка
                    </Link>
                </Nav>
                <ShoppingCard/>
                <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                    <FiInstagram className='instaIcon' />
                </a>
            </Navbar>
        
            <Switch>
                <Route exact path='/home' >
                    <Home  />
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
        
            </Switch>
        </>
    )

    
}

export default NavBar;