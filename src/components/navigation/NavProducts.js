import React from 'react';
import '../navigation/NavProducts.css';

import { 
    fetchProducts, 
    sortByTypeHair, 
    sortByTypeFace, 
    sortByTypeBody, 
    sortByTypeAccessories,
    sortByDiscount, } from '../../state/products';

import { connect } from 'react-redux';

import Nav from 'react-bootstrap/Nav';


function NavProducts({ 
    fetchProducts, 
    sortByTypeHair, 
    sortByTypeFace, 
    sortByTypeBody, 
    sortByTypeAccessories,
    sortByDiscount,  }) {
    return(
        <div className='navContainer' >
            <Nav className='navBody' >
                <Nav.Item>
                    <Nav.Link onClick={fetchProducts} className="navBodyLink" >Всі</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeHair} className="navBodyLink" >Для волосся</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeFace} className="navBodyLink" >Для обличчя</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeBody} className="navBodyLink" >Для тіла</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={sortByTypeAccessories} className="navBodyLink" >Аксесуари</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={sortByDiscount} className="navBodyLink" >Знижки</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="navBodyLink" >Комплекс</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
    
}

const mapStateToProps = () => ({
})


const mapDispatchToProps = {
    fetchProducts,
    sortByTypeHair,
    sortByTypeFace,
    sortByTypeBody,
    sortByTypeAccessories,
    sortByDiscount,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavProducts);