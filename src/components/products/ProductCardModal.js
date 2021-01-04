import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ProductCardModal extends React.Component {

  render() {
    return (
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      show={this.state.show} 
      onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title> Title </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
              Close
          </Button>
          <Button variant="primary" onClick={this.closeModal}>
              Save Changes
          </Button>
          </Modal.Footer>
      </Modal>
    );
  }
    
}

export default ProductCardModal;