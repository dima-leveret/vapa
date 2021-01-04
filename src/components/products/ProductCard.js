import React from "react";
import '../products/ProductCard.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img123 from '../../img/img123.jpg';
import Modal from 'react-bootstrap/Modal';

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com'

class ProductCard extends React.Component {

    state = {
        productList: [],
        show: false,
        productId: null,
    }

    fetchProducts = () => {
        fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            if (!data) {
                this.setState({
                    productList: []
                })
            } else {
                const formattedData = Object.keys(data)
                .map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                console.log(formattedData);
                this.setState({
                    productList: formattedData
                })
            }
            
        })
    }

    componentDidMount() {
        this.fetchProducts()
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

    render (){
        return (
            <div className="bobyContainer" >
                <div className='cardContainer' >
                {
                    this.state.productList.map(product => (
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
                            <Button className="cardButton" > В кошик </Button>
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
                        <div>
                            <Button 
                            onClick={() => this.openModal(product.id)}
                            className="cardButton" > Детальніше </Button>
                            <Button className="cardButton" > В кошик </Button>
                        </div>
                    </Card>
                ))
                }
                </div>
            </div>
        )
    }
} 

export default ProductCard;