import React from 'react';
import '../navigation/NavBody.css';

import Nav from 'react-bootstrap/Nav';


function NavBody() {
    return(
        <div className='navContainer' >
            <Nav className='navBody' >
                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Всі</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Для волосся</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Для обличчя</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Для тіла</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Аксесуари</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Знижки</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Комплекс</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
    
}

export default NavBody;