import React from "react";
import { connect } from 'react-redux';
import './Products.css';
import { fetchProducts } from '../../state/products';

import ProductCard from "./ProductCard";
// import ProductDetailsModal from "./ProductDetailsModal";

import { Spinner } from "react-bootstrap";


 class Products extends React.Component {

    // state = {
    //     showDetails: false, 
    //     productId: null,
    //     showEdit: false, 
    //     editId: null, 
    // }

    componentDidMount(){
         this.props.fetchProducts();
     }

    // openModalDetails = (oneProductId) => {
    //     this.setState({
    //         productId: oneProductId,
    //         showDetails: true,
    //     })
    // }

    // closeModalDetails = () => {
    //     this.setState({
    //         productId: null,
    //         showDetails: false,
    //     })
    // }

    // openModalEdit = (oneProductId) => {
    //     this.setState({
    //         editId: oneProductId,
    //         showEdit: true,
    //     })
    // }

    // closeModalEdit = () => {
    //     this.setState({
    //         editId: null,
    //         showEdit: false,
    //     })
    // }

    isProductInCart = (productIdInCart) => {
        return this.props.productsInCart.some(product => product.id === productIdInCart)
    }
    
    render() {
        
        return(
            <>
            {this.props.isLoading && <Spinner animation="grow" variant="warning" /> }
            {
                this.props.products.map(product => (
                    // this.state.productId === product.id
                //  ? 
                //  <ProductDetailsModal
                //     key={product.id}
                //     show={this.state.showDetails}
                //     onHide={() => this.closeModalDetails()}
                //     isProductInCart={this.isProductInCart}

                //     product={product}

                //     productProduct={product.product}
                //     productName={product.name}
                //     productPrice={product.price}
                //     productFullDescription={product.fullDescription}
                //     productDetails={product.details}
                //     productUsage={product.usage}
                //     productStructure={product.structure}
                //     productPreservation={product.preservation}
                //     productDate={product.date}
                //     productVolume={product.volume}
                //     productAmount={product.amount}
                //     productId={product.id}
                //     available={product.amount}
                //     productType={product.type}
                 
                //  />
                //  : 
                 <ProductCard
                    key={product.id}
                    product={product}

                    productId={product.id}
                    productProduct={product.product}
                    productName={product.name}
                    productDescription={product.description}
                    productFullDescription={product.fullDescription}
                    productPrice={product.price}
                    productNewPrice={product.newPrice}
                    productAmount={product.amount}
                    productDetails={product.details}
                    productUsage={product.usage}
                    productStructure={product.structure}
                    productPreservation={product.preservation}
                    productDate={product.date}
                    productVolume={product.volume}
                    available={product.amount}
                    productType={product.type}
                    productComplex={product.complex}
                    productDiscount={product.discount}
                    productSize={product.size}
                    

                    // openModalDetails={() => this.openModalDetails(product.id)}
                    isProductInCart={this.isProductInCart}


                 />
            ))
            }
            </>
        ) 
    }
}

const mapStateToProps = (state) => ({
    products: state.products.data,
    isLoading: state.products.isLoading,
    productsInCart: state.shoppingCard,
})


const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
