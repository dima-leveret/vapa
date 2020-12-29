import React from "react";
import '../products/ProductCard.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img123 from '../../img/img123.jpg'

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com'

class ProductCard extends React.Component {

    state = {
        productList: [],
    }

    fetchProducts = () => {
        fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            if (!data) {
                this.setState({
                    productList: []
                })
            } else {
                const formattedData = Object.keys(data)
                .map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                console.log(formattedData);
                this.setState({
                    productList: formattedData
                })
            }
            
        })
    }

    componentDidMount() {
        this.fetchProducts()
    }

    render (){
        return (
            <div className='cardContainer' >
                {
                    this.state.productList.map(product => (
                    <Card className='card' key={product.id} >
                            <Card.Img variant="top" src={img123} alt='some picture' className='cardImg'/>
                        <Card.Body>
                            <Card.Title> {product.product} "{product.name}" </Card.Title>
                            <Card.Text> {product.description} </Card.Text>
                            <Button variant="primary"> В кошик </Button>
                        </Card.Body>
                    </Card>
                    ))
                }
                
            </div>
        )
    }
} 

export default ProductCard;