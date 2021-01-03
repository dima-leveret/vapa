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

    openModal = () => {
        this.setState({
            show: true,
        })
        console.log('modal');
    }

    render (){
        return (
            <div className="bobyContainer" >
                <div className='cardContainer' >
                {
                    this.state.productList.map(product => (
                    <Card className='card'  key={product.id} >
                            <Card.Img variant="top" src={img123} alt='some picture' className='cardImg'/>
                        <Card.Body>
                            <Card.Title> {product.product} "{product.name}" </Card.Title>
                            <Card.Text> {product.description} </Card.Text>
                        </Card.Body>
                        <div>
                            <Button 
                            onClick={this.openModal}
                            className="cardButton" > Детальніше </Button>
                            <Button className="cardButton" > В кошик </Button>
                        </div>
                        <Modal show={this.state.show} onHide={this.state.show}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={this.state.show}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.state.show}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                ))
                }
                </div>
            </div>
            
        )
    }
} 

export default ProductCard;