// ACTIONS
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DENCREMENT';
const RESET = 'RESET';

//REDUCER
export const counter = (state = 1, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 1
        default:
            return state;
    }
}

//ACTION CREATOR

export const increment = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT })
    }
}
export const decrement = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT })
    }
}
export const reset = () => {
    return (dispatch) => {
        dispatch({ type: RESET })
    }
}