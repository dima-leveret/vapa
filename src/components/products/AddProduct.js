import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../state/products';

import  './AddProduct.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com';

class AddProduct extends React.Component {

    state = {
        open: false,

        amount: 0,
        complex: false,
        date: '',
        description: '',
        details: '',
        discount: false,
        fullDescription: '',
        name: '',
        newPrice: 0,
        preservation: '',
        price: 0,
        product: '',
        structure: '',
        size: '',
        type: '',
        usage: '',
        volume: 0,
    }

    openModal = () => {
        this.setState({
            open: true,
        })
    }
    
    closeModal = () => {
        this.setState({
            open: false,
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            amount: this.state.amount,
            complex: this.state.complex,
            date: this.state.date,
            description: this.state.description,
            details: this.state.details,
            discount: this.state.discount,
            fullDescription: this.state.fullDescription,
            name: this.state.name,
            newPrice: this.state.newPrice,
            preservation: this.state.preservation,
            price: this.state.price,
            product: this.state.product,
            structure: this.state.structure,
            size: this.state.size,
            type: this.state.type,
            usage: this.state.usage,
            volume: this.state.volume,
        }

        fetch(`${DATABASE_URL}/products.json`, {
            method: 'POST',
            body: JSON.stringify(newProduct)
        }).then(() => {
            this.closeModal();
        }).then(() => {
            this.props.fetchProducts()
        })
    }

    discountChange = () => {
        this.setState({
            discount: true
        })
    }

    complexChange = () => {
        this.setState({
            complex: true
        })
    }

    render (){
        return(
            <>
               <Button 
               variant="outline-success" 
               className="addButton"
               onClick={() => this.openModal()} 
               > 
                Add new product 
               </Button>

               <Modal
                        
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.open}
                    onHide={this.closeModal} 
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> Add new product </Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>

                        <Form onSubmit={this.handleOnSubmit} >
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="name" 
                                onChange={this.handleOnChange} 
                                value={this.state.name}
                                />

                                <Form.Label>Product</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="product" 
                                onChange={this.handleOnChange}
                                value={this.state.product} 
                                />

                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="description" 
                                onChange={this.handleOnChange}
                                value={this.state.description} 
                                />

                                <Form.Label>Full description</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="fullDescription" 
                                onChange={this.handleOnChange}
                                value={this.state.fullDescription} 
                                />

                                <Form.Label>Details</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="details" 
                                onChange={this.handleOnChange}
                                value={this.state.details} 
                                />

                                <Form.Label>Usage</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="usage" 
                                onChange={this.handleOnChange}
                                value={this.state.usage} 
                                />

                                <Form.Label>Structure</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="structure" 
                                onChange={this.handleOnChange}
                                value={this.state.structure} 
                                />

                                <Form.Label>Preservation</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="preservation" 
                                onChange={this.handleOnChange}
                                value={this.state.preservation} 
                                />

                                <Form.Label>Size</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="size" 
                                onChange={this.handleOnChange}
                                value={this.state.size}
                                />

                                <Form.Label>Date</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="date" 
                                onChange={this.handleOnChange}
                                value={this.state.date}
                                />

                                <Form.Label>Volume</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="volume" 
                                onChange={this.handleOnChange}
                                value={this.state.value}
                                />

                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="amount" 
                                onChange={this.handleOnChange}
                                value={this.state.amount} 
                                />

                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select product type</Form.Label>
                                <Form.Control 
                                name="type" 
                                as="select" 
                                type='text' 
                                onChange={this.handleOnChange}
                                value={this.state.type}
                                >
                                <option>hair</option>
                                <option>face</option>
                                <option>body</option>
                                <option>accessories</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Discount or Complex</Form.Label>
                            <Form.Check 
                                type='radio'
                                label='discount'
                                name="discount"
                                onChange={this.discountChange}
                                value={this.state.discount}
                            />
                            <Form.Check 
                                type='radio'
                                label='complex'
                                name="complex"
                                onChange={this.complexChange}
                                value={this.state.complex}
                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="price" 
                                onChange={this.handleOnChange}
                                value={this.state.price}
                                />

                                <Form.Label>New price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="newPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.newPrice} 
                                />
                            </Form.Group>

                            <Button 
                            variant="outline-success" 
                            className="addButton" 
                            type='submit'
                            > 
                                Add  
                            </Button>
                            
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);