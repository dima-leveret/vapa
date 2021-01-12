// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DENCREMENT';
const RESET = 'RESET';

//REDUCER
export const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0
        default:
            return state;
    }
}

//ACTION CREATOR

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })