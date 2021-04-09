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
import Table from 'react-bootstrap/Table';


function NavProducts({ 
    fetchProducts, 
    sortByTypeHair, 
    sortByTypeFace, 
    sortByTypeBody, 
    sortByTypeAccessories,
    sortByDiscount,
    sortByComplex,  }) {

    return(
        // <div className='navContainer' >
        //     <Nav className='navBody' >
        //         <Nav.Item>
        //             <Nav.Link onClick={fetchProducts} className="navBodyLink" >All</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link onClick={sortByTypeHair} className="navBodyLink" >For hair</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link onClick={sortByTypeFace} className="navBodyLink" >For face</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link onClick={sortByTypeBody} className="navBodyLink" >For body</Nav.Link>
        //         </Nav.Item>

        //         <Nav.Item>
        //             <Nav.Link onClick={sortByTypeAccessories} className="navBodyLink" >Accessories</Nav.Link>
        //         </Nav.Item>

        //         <Nav.Item>
        //             <Nav.Link onClick={sortByDiscount} className="navBodyLink" >Sails</Nav.Link>
        //         </Nav.Item>

        //         <Nav.Item>
        //             <Nav.Link onClick={sortByComplex} className="navBodyLink" >Complex</Nav.Link>
        //         </Nav.Item>
        //     </Nav>
        // </div>
        <div className='navContainer' >
            <Table className='navBody' responsive>

                <Nav.Item className="nav-item" onClick={fetchProducts}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >All</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByTypeHair}>
                    <div className="navIcon" />
                    <Nav.Link className="navBodyLink" >For hair</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByTypeFace}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >For face</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByTypeBody}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >For body</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByTypeAccessories}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >Accessories</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByDiscount}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >Sails</Nav.Link>
                </Nav.Item>

                <Nav.Item className="nav-item" onClick={sortByComplex}>
                    <div className="navIcon" />
                    <Nav.Link  className="navBodyLink" >Complex</Nav.Link>
                </Nav.Item>

            </Table>
        </div>
    )
}

const mapStateToProps = () => ({})


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