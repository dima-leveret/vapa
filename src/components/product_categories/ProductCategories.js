import React from 'react';

import { connect } from 'react-redux';
import { getCategories } from '../../state/categories'

import './ProductCategories.css'


class ProductCategories extends React.Component {

    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        return(
            <div>
                <ul className='categoryContainer' >
                    <li className='categoryButton' > All </li>
                    {
                        this.props.categories.map(category => (
                            <li key={category.id} className='categoryButton' > {category.categoryTitle} </li>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    categories: state.categories.data
})


const mapDispatchToProps = {
    getCategories,
}


export default  connect(mapStateToProps, mapDispatchToProps)(ProductCategories); 