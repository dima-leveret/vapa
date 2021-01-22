import React from 'react';
import { connect } from 'react-redux';
import {RiShoppingBagLine} from 'react-icons/ri';
import img123 from '../../img/img123.jpg';
import { removeFromCard, increment, decrement } from '../../state/shoppingCard';

import './ShoppingCard.css'

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
             return accumulator + current.price;
        }, 0)
    }


    render() {
        console.log(this.props.productsInShoppingCard);
        return(
            <>
                <Button  variant="outline-success" size='lg' onClick={this.openModal} >
                    <RiShoppingBagLine/>
                    <Badge pill variant='dark' > {this.props.productsInShoppingCard.length} </Badge>
                </Button>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isOpen}
                    onHide={this.closeModal} 
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> Ваше замовлення </Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>
                        Список замовлень:
                        {
                            this.props.productsInShoppingCard.length > 0
                            ? (
                            <Table bordered  >
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
                                                        productInCard.value === 1
                                                        ?
                                                        <ButtonGroup>
                                                        <Button variant='danger' disabled
                                                        onClick={() => this.props.decrement(productInCard.id)} >minus</Button>
                                                        <h2 style={{ color: 'black' }} > {productInCard.value} </h2>
                                                        <Button variant='primary' 
                                                        onClick={() => this.props.increment(productInCard.id)} >plus</Button>
                                                    </ButtonGroup>
                                                    :
                                                    <ButtonGroup>
                                                        <Button variant='danger' 
                                                        onClick={() => this.props.decrement(productInCard.id)} >minus</Button>
                                                        <h2 style={{ color: 'black' }} > {productInCard.value} </h2>
                                                        <Button variant='primary' 
                                                        onClick={() => this.props.increment(productInCard.id)} >plus</Button>
                                                    </ButtonGroup>
                                                    }
                                                    

                                                </div>
                                            </td>
                                            <td>{productInCard.price}</td>
                                            <td>
                                                <Button
                                                className='buttnonInShoppingCard'
                                                variant='danger'
                                                onClick={() => this.props.removeFromCard(productInCard.id)} 
                                                > Усунути  </Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            </Table>
                            )
                            : <p>
                                Твій кошик порожній :(
                            </p>
                        }
                        
                        <div className="totalPrice" >
                            <h2 >
                                Сума: <Badge variant='info' > {this.getTotalPrice()} </Badge> грн
                            </h2>
                        </div>        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Назад</Button>
                        <Button variant='success' >
                            Підсумок та оплата 
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