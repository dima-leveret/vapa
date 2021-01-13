import React from 'react';
import '../footer/Footer.css';
import { FiInstagram } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DarkVapaLogo from '../../img/dark_vapa_logo.svg';
import { Switch, Route, Link } from 'react-router-dom';



function Footer() {
    return(
    <div>
        <Navbar className='footer'>
            <Link to='/home' >
            <Navbar.Brand  className='menuBrand' >
                <img className="menuBrandImage" src={DarkVapaLogo} alt={'vapa_logo'} />
            </Navbar.Brand>
            </Link> 
            <a href='https://www.instagram.com/vapa.eco/' target='blank' >
                <FiInstagram className='instaIcon' />
            </a>
                <Nav className='menu' >
                    <Link className='menuLink' to='/aboutVapa' >
                        Про Vapa
                    </Link>
                    
                    <Link to='/contacts' className='menuLink' >
                        Контакты
                    </Link>

                    <Link to='/partners' className='menuLink' >
                        Партнери
                    </Link>

                    <Link to='/paymentAndDelivery' className='menuLink' >
                        Оплата та доставка
                    </Link>
                </Nav>
                
        </Navbar>
    </div>
)
}

export default Footer;