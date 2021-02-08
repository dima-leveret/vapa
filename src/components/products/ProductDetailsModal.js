import React from 'react';
import { connect } from 'react-redux';
import { addToCard } from '../../state/shoppingCard';

import './ProductDetailsModal.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ProductDetailsModal (props) {

    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide} 
       >
        <Modal.Header closeButton>
          <Modal.Title> {props.productProduct} {props.productName} </Modal.Title>
        </Modal.Header>
                    
        <Modal.Body>
          <p> {props.productPrice} UAH </p>
          {
            props.productAmount == '0' 
            ? 
            <p style={{ color: 'red' }} > Not available </p>
            : 
            <div>
              {
                props.isProductInCart(props.productId)
                ? <p className="paragraf" > Product added </p>
                :<Button
                  className="cardButton" 
                  onClick={() => props.addToCard(props.product)}
                  > Add to cart </Button>
              }
            </div>
          }
          <hr/>
          <strong>{props.productFullDescription}</strong>
          <br/>
          <br/>
          <p>{props.productDetails}</p>
          <strong>How to use:</strong>
          <p>{props.productUsage}</p>
          <strong>Structure:</strong>
          <p>{props.productStructure}</p>
          <strong>Preservation:</strong>
          <p>{props.productPreservation}</p>
          <strong>Date:</strong>
          <p>{props.productDate}</p>
          <strong>Volume:</strong>
          <p>{props.productVolume}</p>
          <strong>Is available:</strong>
          <p>{props.available} units</p>
        </Modal.Body>
      </Modal>
    );
  }

  const mapStateToProps = (state) => ({})


  const mapDispatchToProps = {
      addToCard,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsModal);