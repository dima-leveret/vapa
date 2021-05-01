import React from 'react';
import { connect } from 'react-redux';
import { addToCard } from '../../state/shoppingCard';
import { deleteProduct } from '../../state/products';

import EditProduct from "./EditProduct";
import ProductDetailsModal from "./ProductDetailsModal" 

import './ProductCard.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img123 from '../../img/052.jpeg';



class ProductCard extends React.Component {

    state = {
        showEdit: false, 
        editId: null,
        showDetails: false, 
        detailsId: null,
    }

    openModalEdit = (oneProductId) => {
        this.setState({
            editId: oneProductId,
            showEdit: true,
        })
        console.log(oneProductId);
    }

    closeModalEdit = () => {
        this.setState({
            editId: null,
            showEdit: false,
        })
    }

    openModalDetails = (oneProductId) => {
        this.setState({
            detailsId: oneProductId,
            showDetails: true,
        })
    }

    closeModalDetails = () => {
        this.setState({
            detailsId: null,
            showDetails: false,
        })
    }

    render (){
        return (
        <>
            <Card  className='card' >
                <Card.Img
                onClick={() => this.openModalDetails(this.props.productId)} 
                variant="top" 
                src={img123} 
                alt='some-picture' 
                className="card-img" />
                <Card.Body onClick={() => this.openModalDetails(this.props.productId)} >
                    <Card.Title > {this.props.productProduct} </Card.Title>
                    <Card.Text> { this.props.productDescription} </Card.Text>
                </Card.Body>
                {this.props.productDiscount === true 
                ? 
                <div style={{ display: 'flex' }} >
                    <Card.Text style={{ fontSize: '22px' }} >  
                    <del  style={{ fontSize: '14px', marginRight: '10px' }} > {this.props.productPrice} UAH </del>
                    {this.props.productNewPrice} UAH 
                    </Card.Text> 
                </div>
                :
                <Card.Text style={{ fontSize: '22px' }} > {this.props.productPrice} UAH </Card.Text>
                }
                {/* <div className="buttons" > */}
                    {/* <Button 
                    onClick={() => this.openModalDetails(this.props.productId)}
                    className="cardButton" > Details 
                    </Button> */}
                    {
                        this.props.productAmount == '0' 
                        ? 
                        <Button disabled className="cardButtonNa" > Немае в наявности</Button>
                        : 
                        <>
                            {
                                this.props.isProductInCart(this.props.productId)
                                ? <Button disabled className="cardButtonAdded" > Product added </Button>
                                :<Button
                                className="cardButton" 
                                onClick={() => this.props.addToCard(this.props.product)}
                                > Add to cart </Button>
                            }
                        </>      
                    }
                {/* </div> */}
                {/* <div className='buttons' >
                    <Button
                    className="cardButtonED"
                    onClick={() => this.openModalEdit(this.props.productId)}
                    >Edit</Button>
    
                    <Button
                    className="cardButtonED"
                    onClick={() => this.props.deleteProduct(this.props.productId)}
                    >Delete</Button>
    
                </div> */}
            </Card>

            <ProductDetailsModal
                show={this.state.showDetails}
                onHide={() => this.closeModalDetails()}
                isProductInCart={this.props.isProductInCart}
                product={this.props.product}

                productName={this.props.productName}
                productProduct={this.props.productProduct}
                productPrice={this.props.productPrice}
                productFullDescription={this.props.productFullDescription}
                productDetails={this.props.productDetails}
                productUsage={this.props.productUsage}
                productStructure={this.props.productStructure}
                productPreservation={this.props.productPreservation}
                productDate={this.props.productDate}
                productVolume={this.props.productVolume}
                productAmount={this.props.productAmount}
                productId={this.props.productId}
                available={this.props.productAmount}
                productType={this.props.productType}
            />

            <EditProduct
                show={this.state.showEdit}
                onHide={() => this.closeModalEdit()}
                closeModalEdit={() => this.closeModalEdit()}

                productDescription={this.props.productDescription}
                productName={this.props.productName}
                productProduct={this.props.productProduct}
                productPrice={this.props.productPrice}
                productFullDescription={this.props.productFullDescription}
                productDetails={this.props.productDetails}
                productUsage={this.props.productUsage}
                productStructure={this.props.productStructure}
                productPreservation={this.props.productPreservation}
                productDate={this.props.productDate}
                productVolume={this.props.productVolume}
                productAmount={this.props.productAmount}
                productId={this.props.productId}
                available={this.props.productAmount}
                productType={this.props.productType}
                productDiscount={this.props.productDiscount}
                productComplex={this.props.productComplex}
                productNewPrice={this.props.productNewPrice}
                productSize={this.props.productSize}
            />
        </>
        )
    }
}


const mapStateToProps = (state) => ({
    productsInCart: state.shoppingCard,
})


const mapDispatchToProps = {
    addToCard,
    deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);