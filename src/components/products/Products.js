import React from "react";
import { connect } from 'react-redux';
import './Products.css';
import { fetchProducts } from '../../state/products';

import ProductCard from "./ProductCard";
// import ProductDetailsModal from "./ProductDetailsModal";

import { Spinner } from "react-bootstrap";


 class Products extends React.Component {

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
            <div className='productsContainer'>
            {this.props.isLoading && <Spinner animation="grow" variant="warning" /> }
            {
                this.props.products
                .filter(product => 
                    product.product.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue.toLowerCase())
                    || product.description.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue.toLowerCase())
                    // || product.price.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue)
                )
                .map(product => (
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

                    isProductInCart={this.isProductInCart}
                />
            ))
            }
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    products: state.products.data,
    isLoading: state.products.isLoading,
    productsInCart: state.shoppingCard,
    inputValue: state.products.searchInput,
})


const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
