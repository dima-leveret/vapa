import React from "react";
import { connect } from 'react-redux';
import './Products.css';
import { fetchProducts } from '../../state/products';

import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

import { Spinner } from "react-bootstrap";


 class Products extends React.Component {

    state = {
        show: false, 
        productId: null,
    }

    componentDidMount(){
         this.props.fetchProducts();
     }

    openModal = (oneProductId) => {
        this.setState({
            productId: oneProductId,
            show: true,
        })
    }

    closeModal = () => {
        this.setState({
            productId: null,
            show: false,
        })
    }   
    
    render() {
        return(
            <>
            {this.props.isLoading && <Spinner animation="grow" variant="warning" /> }
            {
                this.props.products.map(product => (
                    this.state.productId === product.id
                 ? 
                 <ProductDetailsModal
                    show={this.state.show}
                    onHide={() => this.closeModal()}
                    productProduct={product.product}
                    productName={product.name}
                    productPrice={product.price}
                    product={product}
                    productFullDescription={product.fullDescription}
                    productDetails={product.details}
                    productUsage={product.usage}
                    productStructure={product.structure}
                    productPreservation={product.preservation}
                    productDate={product.date}
                    productSize={product.size}
                 
                 />
                 : 
                 <ProductCard
                 key={product.id} 
                 productId={product.id}
                 productProduct={product.product}
                 productName={product.name}
                 productDescription={product.description}
                 productPrice={product.price}
                 productAmount={product.amount}
                 product={product}
                 openModal={() => this.openModal(product.id)}
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
})


const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
