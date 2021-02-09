import React from 'react';
import { connect } from 'react-redux';
import { addToCard } from '../../state/shoppingCard';
import { fetchProducts, deleteProduct } from '../../state/products';

import './ProductCard.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img123 from '../../img/img123.jpg';



function ProductCard (props) {

    return (
        <Card  className='card' >
            <Card.Img variant="top" src={img123} alt='some picture' className='cardImg'/>
            <Card.Body>
                <Card.Title> {props.productProduct} { props.productName} </Card.Title>
                <Card.Text> { props.productDescription} </Card.Text>
            </Card.Body>
            <p> {props.productPrice} UAH </p>
            <div className="buttons" >
                <Button 
                onClick={props.openModal}
                className="cardButton" > Details 
                </Button>
                {
                    props.productAmount == '0' 
                    ? 
                    <p className="cardButtonP" > Not available </p>
                    : 
                    <div>
                        {
                            props.isProductInCart(props.productId)
                            ? <p className="cardButtonP" > Product added </p>
                            :<Button
                            className="cardButton" 
                            onClick={() => props.addToCard(props.product)}
                            > Add to cart </Button>
                        }
                    </div>      
                }
            </div>
            <div className='buttons' >
                <Button
                className="cardButtonED"
                >Edit</Button>

                <Button
                className="cardButtonED"
                onClick={() => props.deleteProduct(props.productId)}
                >Delete</Button>

            </div>
        </Card>
        )
    }


const mapStateToProps = (state) => ({
    productsInCart: state.shoppingCard,
})


const mapDispatchToProps = {
    addToCard,
    deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);