// import firebase from 'firebase'

const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com';

//INITIAL STATE
const initialSate = {
    data: [],
}

//ACTIONS
const SET_CATEGORIES = 'SET_CATEGORIES';

//REDUCER
export const categories = ( state = initialSate, action ) => {
    switch(action.type) {
        case SET_CATEGORIES:
            return {
                data: action.payload
            }

        default:
            return state;   
    }
}

//ACTION CREATORS
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: categories });

export const getCategories = () => (dispatch) => {
    fetch(`${DATABASE_URL}/productCategories.json`)
        .then(r => r.json())
        .then(data => {
            const formattedCategories = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            dispatch(setCategories(formattedCategories))
        })
};