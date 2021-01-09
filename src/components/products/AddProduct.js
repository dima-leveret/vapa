import React from 'react';
import  './AddProduct.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                Додай продукт 
               </Button>

               <Modal
                        
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.open}
                        onHide={this.closeModal} 
                        >
                        <Modal.Header closeButton>
                        <Modal.Title> Додай продукт Миха! </Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            Фрмуляж продукции
                        </Modal.Body>

                    </Modal>

            </>
        )
    }

}

export default AddProduct;