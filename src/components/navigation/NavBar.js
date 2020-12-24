import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
    return(
        <Navbar style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Navbar.Brand href="#home">VAPA</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
        </Navbar>
)
}

export default NavBar;