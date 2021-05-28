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
                    product.productTitle.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue.toLowerCase())
                    || product.description.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue.toLowerCase())
                    // || product.productPrices.regularPrice.replaceAll('[^A-Za-z0-9]', '').toLowerCase().includes(this.props.inputValue)
                )
                .map(product => (
                 <ProductCard
                    key={product.id}
                    product={product}

                    productId={product.id}
                    productAmount={product.amount}
                    productComplex={product.complex}
                    productComplexList={product.complexList}
                    productDescription={product.description}
                    productDiscount={product.discount}
                    productExpirationDate={product.expirationDate}
                    productFullDescription={product.fullDescription}
                    isProductInTheStore={product.isProductInTheStore}
                    productKeyComponents={product.keyComponents}
                    productMinPackage={product.minPackage}
                    productPreservation={product.preservation}
                    productCategories={product.productCategories}
                    productDiscountMinPrice={product.productPrices.discountMinPrice}
                    productDiscountPrice={product.productPrices.discountPrice}
                    productMinPrice={product.productPrices.minPrice}
                    productRegularPrice={product.productPrices.regularPrice}
                    productTitle={product.productTitle}
                    productRegularPackage={product.regularPackage}
                    productRegularValue={product.regularValue}
                    productRegularWeight={product.regularWeight}
                    productStructure={product.structure}
                    productType={product.type}
                    productUsage={product.usage}
                    productValueType={product.valueType}

                    available={product.amount}

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
