import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { increment } from '../../state/counter';
import { decrement } from '../../state/counter';
import { reset } from '../../state/counter';

import { connect } from 'react-redux';

function Counter({ value, increment, decrement, reset }) {
    console.log(value);
    
    return (
        <div className='counter' >
            <h2 style={{ color: 'black' }} > {value} </h2>
            <ButtonGroup>
                <Button variant='primary' onClick={increment} >plus</Button>
                <Button variant='success' onClick={reset} >RESET</Button>
                <Button variant='danger' onClick={decrement} >minus</Button>
            </ButtonGroup>

        </div>
        
    )
}

const mapStateToProps = (state) => {
    return{
        value: state.counter
    }
};

// short version
// const mapStateToProps = (state) => ({
//         value: state
// });  

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);