import React from 'react';
import '../navigation/NavBar.css';
import { FiInstagram } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import VapaLogo from '../../img/vapa_logo.png';
import { Switch, Route, Link } from 'react-router-dom';

import AboutVapa from '../content/AboutVapa';
import Contacts from '../content/Contacts';
import PartnersFullVersion from '../content/PartnersFullVersion'
import PaymentAndDelivery from '../content/PaymentAndDelivery';
import Home from '../products/Home'



function NavBar() {
    return(
    <>
        <Navbar className='navBar'>
            <Link to='/home' >
            <Navbar.Brand  className='navBrand' >
                <img className="navBrandImage" src={VapaLogo} alt={'vapa_logo'} />
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
                <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                <FiInstagram className='instaIcon' />
                </a>
        </Navbar>

        <Switch>
            <Route path='/home' >
                <Home  />
            </Route>

            <Route path='/aboutVapa' >
                <AboutVapa />
            </Route>

            <Route path='/contacts' >
                <Contacts />
            </Route>

            <Route path='/partners' >
                <PartnersFullVersion />
            </Route>

            <Route path='/paymentAndDelivery' >
                <PaymentAndDelivery />
            </Route>

        </Switch>
    </>
)
}

export default NavBar;