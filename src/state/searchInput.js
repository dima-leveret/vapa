//ACTIONS
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const CLEAN_INPUT_VALUE = 'CLEAN_INPUT_VALUE';

//REDUCER
export const searchInpyt = (state = '', action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return action.payload;
        case CLEAN_INPUT_VALUE:
            return '';
        default:
            return state
    }
}

//ACTION CREATOR

export const setInputValue = (str) => ({
    type:SET_INPUT_VALUE,
    payload: str
})

export const cleanInputValue = () => ({
    type:CLEAN_INPUT_VALUE,
})