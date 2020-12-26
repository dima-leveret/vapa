import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import VapaLogo from '../../img/vapa_logo.png'


function NavBar() {
    return(
        <Navbar style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Navbar.Brand href="#home">
                <img style={{ width: '30px' }}
                src={VapaLogo} 
                alt={'vapa_logo'} />
            </Navbar.Brand>
                <Nav >
                    <Nav.Link
                    style={{ margin: '10px' }} 
                    href="#link"
                    >Про Vapa</Nav.Link>

                    <Nav.Link
                    style={{ margin: '10px' }} 
                    href="#link"
                    >Контакты</Nav.Link>

                    <Nav.Link
                    style={{ margin: '10px' }} 
                    href="#link"
                    >Link</Nav.Link>

                    <Nav.Link
                    style={{ margin: '10px' }} 
                    href="#link"
                    >Link</Nav.Link>
                    
                </Nav>
        </Navbar>
)
}

export default NavBar;