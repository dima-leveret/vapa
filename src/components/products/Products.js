import React from "react";
import { connect } from 'react-redux';
import '../products/Products.css';
import { fetchProducts } from '../../state/products';
import { addToCard } from '../../state/shoppingCard';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import img123 from '../../img/img123.jpg';
import { Spinner } from "react-bootstrap";


 class Products extends React.Component {

    state = {
        show: false, 
        productId: null,
    }

     componentDidMount(){
         this.props.fetchProducts();
     }

     openModal = (oneProductId) => {
        this.setState({
            productId: oneProductId,
            show: true,
        })
    }

    closeModal = () => {
        this.setState({
            productId: null,
            show: false,
        })
    }   
    
    render() {
        return(
            <>
            {this.props.isLoading && <Spinner animation="grow" variant="warning" /> }
            {
                this.props.products.map(product => (
                    this.state.productId === product.id

                 ?<Modal
                    key={product.id}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                    onHide={this.closeModal} 
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> {product.product} "{product.name}" </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <p> {product.price} грн. </p> 
                        <Button 
                        onClick={() => this.props.addToCard(product)} 
                        className="cardButton" > В кошик </Button>
                        <hr/>
                        <strong>
                            {product.fullDescription}
                        </strong>
                        <br/>
                        <br/>
                        <p>
                            {product.details}
                        </p>
                        <strong>Спосіб застосування:</strong>
                        <p>
                            {product.usage}
                        </p>
                        
                        <strong>
                            Склад:
                        </strong>
                        <p>
                        {product.structure}
                        </p>
                        <strong>
                            Зберігання:
                        </strong>
                        <p>
                            {product.preservation}
                        </p>
                        <strong>
                            Дата віготовлення:
                        </strong>
                        <p>
                            {product.date}
                        </p>
                        <strong>
                            Об'єм:
                        </strong>
                        <p>
                            {product.size}
                        </p>
                    </Modal.Body>
                    
                </Modal>

                 : <Card  className='card'  key={product.id} >
                        <Card.Img variant="top" src={img123} alt='some picture' className='cardImg'/>
                    <Card.Body>
                        <Card.Title> {product.product} "{product.name}" </Card.Title>
                        <Card.Text> {product.description} </Card.Text>
                    </Card.Body>
                    <p> {product.price} </p>
                    <div className="buttons" >
                    <Button 
                        onClick={() => this.openModal(product.id)}
                        className="cardButton" > Детальніше 
                        </Button>
                        {
                            product.amount === 0
                            ? <p className="cardButtonP" > Немає в наявності </p>
                            : <Button
                                className="cardButton" 
                                onClick={() => this.props.addToCard(product)}
                              > В кошик </Button>
                        }
                    </div>
                </Card>
            ))
            }
            </>
        ) 
    }
}
const mapStateToProps = (state) => ({
    products: state.products.data,
    isLoading: state.products.isLoading,
    productsInCard: state.shoppingCard
})

const mapDispatchToProps = {
    fetchProducts,
    addToCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
