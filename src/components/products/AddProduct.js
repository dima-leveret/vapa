import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../state/products';

import  './AddProduct.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com';

class AddProduct extends React.Component {

    state = {
        open: false,

        amount: 0,
        complex: false,
        date: '',
        description: '',
        details: '',
        discount: false,
        fullDescription: '',
        name: '',
        newPrice: 0,
        preservation: '',
        price: 0,
        structure: '',
        size: '',
        type: '',
        usage: '',
        volume: 0,
        product: '',
        productTitle: '',
        productPrices: {
            regularPrice: '',
            minPrice: '',
            discountPrice: '',
            discountMinPrice: '',
        },
        productCategories: {

        },
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

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addNewProduct = (event) => {
        event.preventDefault();

        const newProduct = {
            amount: this.state.amount,
            complex: this.state.complex,
            date: this.state.date,
            description: this.state.description,
            details: this.state.details,
            discount: this.state.discount,
            fullDescription: this.state.fullDescription,
            name: this.state.name,
            newPrice: this.state.newPrice,
            preservation: this.state.preservation,
            price: this.state.price,
            structure: this.state.structure,
            size: this.state.size,
            type: this.state.type,
            usage: this.state.usage,
            volume: this.state.volume,
            product: this.state.product,
            productTitle: this.state.productTitle,
            productPrices: {
                regularPrice: this.state.regularPrice,
                minPrice: this.state.minPrice,
                discountPrice: this.state.discountPrice,
                discountMinPrice: this.state.discountMinPrice,
            },
            productCategory: {

            },
        }

        fetch(`${DATABASE_URL}/products.json`, {
            method: 'POST',
            body: JSON.stringify(newProduct)
        }).then(() => {
            this.closeModal();
            this.props.fetchProducts()
        })
    }

    discountChange = (discount) => {
        this.setState({
            discount: !discount
        })
    }

    complexChange = (complex) => {
        this.setState({
            complex: !complex
        })
    }

    addCategory = () => {
        let newCategory = document.createElement('input');
        let removeCategory = document.createElement('button');
        removeCategory.innerHTML = 'x';
        removeCategory.addEventListener('click', (event) => {
            event.preventDefault();
            newCategory.remove();
            removeCategory.remove();
            console.log('remove category')
        })
        let category = document.getElementById('category');
        category.append(newCategory, removeCategory)

        console.log('create');
    }

    // removeCategory = (event) => {
    //     event.preventDefault();
    //     console.log('remove category');
    // }

    render (){
        return(
            <>
               <Button 
               variant="outline-success" 
               className="addButton"
               onClick={() => this.openModal()} 
               > 
                Add new product 
               </Button>

               <Modal
                        
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.open}
                    onHide={this.closeModal} 
                    >
                    <Modal.Header closeButton>
                    <Modal.Title> Add new product </Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>

                        <Form >
                            <Form.Group controlId="exampleForm.ControlInput1">

                                <Form.Label>Product title</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="productTitle" 
                                onChange={this.handleOnChange} 
                                value={this.state.productTitle}
                                />

                                <Form.Label>Product name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="name" 
                                onChange={this.handleOnChange} 
                                value={this.state.name}
                                />

                                <Form.Label>Product</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="product" 
                                onChange={this.handleOnChange}
                                value={this.state.product} 
                                />

                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="description" 
                                onChange={this.handleOnChange}
                                value={this.state.description} 
                                />

                                <Form.Label>Full description</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="fullDescription" 
                                onChange={this.handleOnChange}
                                value={this.state.fullDescription} 
                                />

                                <Form.Label>Details</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="details" 
                                onChange={this.handleOnChange}
                                value={this.state.details} 
                                />

                                <Form.Label>Usage</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="usage" 
                                onChange={this.handleOnChange}
                                value={this.state.usage} 
                                />

                                <Form.Label>Structure</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="structure" 
                                onChange={this.handleOnChange}
                                value={this.state.structure} 
                                />

                                <Form.Label>Preservation</Form.Label>
                                <Form.Control 
                                as="textarea" 
                                rows={3} 
                                type='text' 
                                name="preservation" 
                                onChange={this.handleOnChange}
                                value={this.state.preservation} 
                                />

                                <Form.Label>Size</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="size" 
                                onChange={this.handleOnChange}
                                value={this.state.size}
                                />

                                <Form.Label>Date</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="date" 
                                onChange={this.handleOnChange}
                                value={this.state.date}
                                />

                                <Form.Label>Volume</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="volume" 
                                onChange={this.handleOnChange}
                                value={this.state.value}
                                />

                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="amount" 
                                onChange={this.handleOnChange}
                                value={this.state.amount} 
                                />

                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select product type</Form.Label>
                                <Form.Control 
                                name="type" 
                                as="select" 
                                type='text' 
                                onChange={this.handleOnChange}
                                value={this.state.type}
                                >
                                <option>hair</option>
                                <option>face</option>
                                <option>body</option>
                                <option>accessories</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group id='category' controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select product category or create a new one</Form.Label>
                                <Button onClick={this.addCategory} >Add</Button>
                                {/* <Form.Control 
                                name="productCategoryOption"  
                                type='text' 
                                onChange={this.handleOnChange}
                                value={this.state.productCategoryOption}
                                /> */}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Discount/Complex</Form.Label>
                            <Form.Check 
                                type='checkbox'
                                label='discount'
                                name="discount"
                                onChange={() => this.discountChange(this.state.discount)}
                                value={this.state.discount}
                            />
                            <Form.Check 
                                type='checkbox'
                                label='complex'
                                name="complex"
                                onChange={() => this.complexChange(this.state.complex)}
                                value={this.state.complex}
                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="price" 
                                onChange={this.handleOnChange}
                                value={this.state.price}
                                />

                                <Form.Label>New price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="newPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.newPrice} 
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Regular price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="regularPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.regularPrice}
                                />

                                <Form.Label>Min price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="minPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.minPrice} 
                                />

                                <Form.Label>Discount price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="discountPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.discountPrice} 
                                />

                                <Form.Label>Discount min price</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="discountMinPrice" 
                                onChange={this.handleOnChange}
                                value={this.state.discountMinPrice} 
                                />
                            </Form.Group>
                            
                        </Form>

                        <Button 
                            variant="outline-success" 
                            className="addButton" 
                            onClick={this.addNewProduct}
                            > 
                                Add  
                            </Button>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    fetchProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);