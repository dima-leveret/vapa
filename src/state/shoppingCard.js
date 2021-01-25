//ACTIONS
const ADD_TO_CARD = 'ADD_TO_CARD';
const REMOVE_FROM_CARD = 'REMOVE_DROM_CARD';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DENCREMENT';


//REDUCER
export const shoppingCard = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CARD:
            return [...state, {...action.payload, number: 1}];
        case REMOVE_FROM_CARD:
            return state.filter(product => product.id !== action.payload);
        case INCREMENT:
           return state.map(product => product.id === action.payload 
            ? { ...product, number: product.number + 1 } 
            : product)
        case DECREMENT:
            return state.map(product => {
                if (product.id === action.payload) {
                    return { ...product, number: product.number - 1 }
                } else {
                    return product
                }
            });
        default:
            return state
    }
}

//ACTION CREATOR

export const addToCard = (product) => ({ type: ADD_TO_CARD, payload: product });
export const removeFromCard = (productId) => ({ type: REMOVE_FROM_CARD, payload: productId });
export const increment = (productId) => ({ type: INCREMENT, payload: productId });
export const decrement = (productId) => ({ type: DECREMENT, payload: productId });