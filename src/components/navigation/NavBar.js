import React from 'react';
import '../navigation/NavBar.css';
import { FiInstagram } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import VapaLogo from '../../img/vapa_logo.png'


function NavBar() {
    return(
        <Navbar className='navBar'>
            <Navbar.Brand className='navBrand' >
                <img className="navBrandImage" src={VapaLogo} alt={'vapa_logo'} />
            </Navbar.Brand>
                <Nav  className='nav' >
                    <Nav.Link
                    className='navLink' 
                    >Про Vapa</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    >Контакты</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    >Партнери</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    >Оплата та доставка</Nav.Link>
                </Nav>
                <FiInstagram className='instaIcon' />
        </Navbar>
)
}

export default NavBar;