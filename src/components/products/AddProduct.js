import React from 'react';
import  './AddProduct.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddProduct extends React.Component {

    state = {
        open: false,

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

                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Product</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Full description</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Label>Usage</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Label>Structure</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Label>Preservation</Form.Label>
                                <Form.Control as="textarea" rows={3} />

                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" />

                                <Form.Label>Volume</Form.Label>
                                <Form.Control type="number" />

                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="number" />

                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select product type</Form.Label>
                                <Form.Control as="select">
                                <option>hair</option>
                                <option>face</option>
                                <option>body</option>
                                <option>accessories</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Sails or Complex</Form.Label>
                            <Form.Check 
                                type='checkbox'
                                label='sails'
                            />
                            <Form.Check 
                                type='checkbox'
                                label='complex'
                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" />

                                <Form.Label>New price</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                            
                        </Form>
                    </Modal.Body>

                    <Button 
                        variant="outline-success" 
                        className="addButton" 
                    > 
                        Add  
                    </Button>

                </Modal>

            </>
        )
    }

}

export default AddProduct;