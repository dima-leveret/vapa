import React from 'react';
import {RiShoppingBagLine} from 'react-icons/ri';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

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


    render() {
        return(
            <>
                <Button variant="outline-success" size='lg' onClick={this.openModal} >
                    <RiShoppingBagLine/>
                </Button>
                <Modal
                    size="sm"
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
                        <Table bordered >
                            <thead>
                                <tr>
                                    <td></td>
                                    <td>Назва</td>
                                    <td>Ціна</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Замкнути</Button>
                        <Button variant='success' >
                            Підсумок та оплата 
                        </Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
    
}

export default ShoppingCard;