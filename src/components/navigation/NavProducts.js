import React from 'react';
import '../navigation/NavProducts.css';

import { 
    fetchProducts, 
    sortByTypeHair, 
    sortByTypeFace, 
    sortByTypeBody, 
    sortByTypeAccessories,
    sortByDiscount,
    sortByComplex, } from '../../state/products';

import { connect } from 'react-redux';

import Nav from 'react-bootstrap/Nav';


function NavProducts({ 
    fetchProducts, 
    sortByTypeHair, 
    sortByTypeFace, 
    sortByTypeBody, 
    sortByTypeAccessories,
    sortByDiscount,
    sortByComplex,  }) {
    return(
        <div className='navContainer' >
            <Nav className='navBody' >
                <Nav.Item>
                    <Nav.Link onClick={fetchProducts} className="navBodyLink" >All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeHair} className="navBodyLink" >For hair</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeFace} className="navBodyLink" >For face</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={sortByTypeBody} className="navBodyLink" >For body</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={sortByTypeAccessories} className="navBodyLink" >Accessories</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={sortByDiscount} className="navBodyLink" >Sails</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={sortByComplex} className="navBodyLink" >Complex</Nav.Link>
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
    sortByComplex,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavProducts);