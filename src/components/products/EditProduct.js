import React from 'react';

import { connect } from 'react-redux';
import { fetchProducts } from '../../state/products';


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com';


class EditProduct extends React.Component {


    state = {
        amount: this.props.productAmount,
        complex: this.props.productComplex,
        date: this.props.productDate,
        description: this.props.productDescription,
        details: this.props.productDetails,
        discount: this.props.productDiscount,
        fullDescription: this.props.productFullDescription,
        name: this.props.productName,
        newPrice: this.props.productNewPrice,
        preservation: this.props.productPreservation,
        price: this.props.productPrice,
        structure: this.props.productStructure,
        size: this.props.productSize,
        type: this.props.productType,
        usage: this.props.productUsage,
        volume:this.props.productVolume,
        product: this.props.productProduct
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    discountChange = (discount) => {
        this.setState({
            discount: !discount
        })
    }

    complexChange = (complex) => {
        this.setState({
            complex: !complex
        })
    }

    handleOnSave = () => {
        fetch(`${DATABASE_URL}/products/${this.props.productId}.json`, {
            method: 'PUT',
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.closeModalEdit();
            this.props.fetchProducts()
        })
    }


    render() {
        return (
            <>
               <Modal     
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.props.show}
                    onHide={this.props.onHide}  
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> Edit the product {this.props.productName} </Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>

                        <Form >
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
                                value={this.state.volume}
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
                                type='checkbox'
                                label='discount'
                                name="discount"
                                onChange={() => this.discountChange(this.state.discount)}
                                checked={this.state.discount}
                                value={this.state.discount}
                            />
                            <Form.Check 
                                type='checkbox'
                                label='complex'
                                name="complex"
                                onChange={() =>  this.complexChange(this.state.complex)}
                                checked={this.state.complex}
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
                            onClick={this.handleOnSave}
                            > 
                                Save  
                            </Button>

                            <Button 
                            variant="outline-success" 
                            className="addButton" 
                            onClick={() => this.props.closeModalEdit()}
                            > 
                                Close  
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

export default  connect(mapStateToProps, mapDispatchToProps)(EditProduct);