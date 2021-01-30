import React from 'react';
import { connect } from 'react-redux';
import { addToCard } from '../../state/shoppingCard';

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
          <Modal.Title> {props.productProduct} "{props.productName}" </Modal.Title>
        </Modal.Header>
                    
        <Modal.Body>
          <p> {props.productPrice} грн. </p>
          {
            props.productAmount === 0 
            ? 
            <p > Немає в наявності </p>
            : 
            <div>
              {
                props.isProductInCart(props.productId)
                ? <p>added</p>
                :<Button
                  className="cardButton" 
                  onClick={() => props.addToCard(props.product)}
                  > В кошик </Button>
              }
            </div>
          }
          <hr/>
          <strong>{props.productFullDescription}</strong>
          <br/>
          <br/>
          <p>{props.productDetails}</p>
          <strong>Спосіб застосування:</strong>
          <p>{props.productUsage}</p>
          <strong>Склад:</strong>
          <p>{props.productStructure}</p>
          <strong>Зберігання:</strong>
          <p>{props.productPreservation}</p>
          <strong>Дата віготовлення:</strong>
          <p>{props.productDate}</p>
          <strong>Об'єм:</strong>
          <p>{props.productSize}</p>
          <strong>У наявності:</strong>
          <p>{props.available} шт</p>
        </Modal.Body>
      </Modal>
    );
  }

  const mapStateToProps = (state) => ({})


  const mapDispatchToProps = {
      addToCard,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsModal);