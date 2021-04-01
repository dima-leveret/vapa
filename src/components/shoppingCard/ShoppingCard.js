import React from 'react';
import { connect } from 'react-redux';
import {RiShoppingBagLine} from 'react-icons/ri';
import img123 from '../../img/img123.jpg';
import { removeFromCard, increment, decrement } from '../../state/shoppingCard';

import './ShoppingCard.css'
import ShopIcon from '../../img/shop.svg';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'

class ShoppingCard extends React.Component {

    state = {
        isOpen: false,
    }


    openModal = () => {
        this.setState({
            isOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false,
        })
    }


    getTotalPrice = () => {
        return this.props.productsInShoppingCard.reduce((accumulator, current)=> {
             return accumulator + current.price * current.number;
        }, 0)
    }
    
    
    
    render() {

        let oneProductPrice = (a, b) => {
            return a * b
        }
        
        return(
            <>
                <div className="shopIcon" onClick={this.openModal}>
                    <img 
                    className="shippingCardIcon"
                    src={ShopIcon}
                    alt="shop icon"
                    />
                    <p className="shoppingCardIconNr" > {this.props.productsInShoppingCard.length} </p>
                </div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isOpen}
                    onHide={this.closeModal} 
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> Your order </Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>
                        {
                            this.props.productsInShoppingCard.length > 0
                            ? (
                            <Table bordered responsive >
                            <thead>
                                <tr>
                                    <td>Продукт</td>
                                    <td>Назва</td>
                                    <td>Кількість</td>
                                    <td>Ціна</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.productsInShoppingCard.map(productInCard => (  
                                         <tr key={this.props.productsInShoppingCard.indexOf(productInCard)} >
                                            <td>
                                                <Card.Img variant="top" src={img123} alt='some picture' className='imgInShoppingCard'/>
                                            </td>
                                            <td>{productInCard.product} "{productInCard.name}"</td>
                                            <td>
                                                <div className='counter' >
                                                    {
                                                        productInCard.number <= '1'
                                                    ?
                                                    <ButtonGroup>
                                                        <Button variant='danger' disabled
                                                        onClick={() => this.props.decrement(productInCard.id)} >-</Button>
                                                        <h2 style={{ color: 'black' }} > {productInCard.number} </h2>
                                                        <Button variant='primary' 
                                                        onClick={() => this.props.increment(productInCard.id)} >+</Button>
                                                    </ButtonGroup>
                                                    :<div>
                                                        {
                                                         productInCard.number >= productInCard.amount 
                                                         ?
                                                        <ButtonGroup>
                                                            <Button variant='danger' 
                                                            onClick={() => this.props.decrement(productInCard.id)} >-</Button>
                                                            <h2 style={{ color: 'black' }} > {productInCard.number} </h2>
                                                            <Button variant='primary' disabled
                                                            onClick={() => this.props.increment(productInCard.id)} >+</Button>
                                                        </ButtonGroup>
                                                         :
                                                        <ButtonGroup>
                                                            <Button variant='danger' 
                                                            onClick={() => this.props.decrement(productInCard.id)} >-</Button>
                                                            <h2 style={{ color: 'black' }} > {productInCard.number} </h2>
                                                            <Button variant='primary' 
                                                            onClick={() => this.props.increment(productInCard.id)} >+</Button>
                                                        </ButtonGroup>
                                                        } 
                                                    </div>
                                                    }
                                                </div>
                                            </td>
                                            <td> {oneProductPrice(productInCard.price, productInCard.number)}</td>
                                            <td>
                                                <Button
                                                className='buttnonInShoppingCard'
                                                variant='danger'
                                                onClick={() => this.props.removeFromCard(productInCard.id)} 
                                                > Remove  </Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            </Table>
                            )
                            : <p>
                                Your cart is empty :(
                            </p>
                        }
                        
                        <div className="totalPrice" >
                            <h2 >
                                Sum: <Badge variant='info' > {this.getTotalPrice()} </Badge> UAH
                            </h2>
                        </div>        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Back</Button>
                        <Button variant='success' >
                            Result and payment
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
    
}

const mapStateToProps = (state) => ({
    productsInShoppingCard: state.shoppingCard,
})

const mapDispatchToProps = {
    removeFromCard,
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCard);