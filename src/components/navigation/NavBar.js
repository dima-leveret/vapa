import React from 'react';
import '../navigation/NavBar.css';
import { FiInstagram } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import VapaLogo from '../../img/vapa_logo.png'


function NavBar() {
    return(
        <Navbar className='navBar'>
            <Navbar.Brand href="#home">
                <img className='navBrand' src={VapaLogo} alt={'vapa_logo'} />
            </Navbar.Brand>
                <Nav  className='nav' >
                    <Nav.Link
                    className='navLink' 
                    href="#link"
                    >Про Vapa</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    href="#link"
                    >Контакты</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    href="#link"
                    >Link</Nav.Link>

                    <Nav.Link
                    className='navLink' 
                    href="#link"
                    >Link</Nav.Link>
                    
                </Nav>
                <FiInstagram className='instaIcon' />
        </Navbar>
)
}

export default NavBar;