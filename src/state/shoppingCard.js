//ACTIONS
const ADD_TO_CARD = 'ADD_TO_CARD';
const REMOVE_FROM_CARD = 'REMOVE_DROM_CARD';

//REDUCER
export const shoppingCard = (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CARD:
            return [...state, action.payload];
        case REMOVE_FROM_CARD:
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
}

//ACTION CREATOR

export const addToCard = (product) => ({ type: ADD_TO_CARD, payload: product });
export const removeFromCard = (productId) => ({ type: REMOVE_FROM_CARD, payload: productId });