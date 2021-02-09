const DATABASE_URL = 'https://dima-leveret-vapa-default-rtdb.firebaseio.com';
//INITIAL STATE
const initialSate = {
    data: [],
    isLoading: false,
    error: null,
}

//ACTIONS
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_LOADING = 'SET_LOADING';

//REDUCER
export const products = (state = initialSate, action) => {
    switch(action.type){
        case SET_PRODUCTS:
            return {
                error: null,
                isLoading: false,
                data: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

//ACTION CREATORS
export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
export const setLoading = () => ({ type: SET_LOADING });

export const fetchProducts = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            dispatch(setProducts(formattedData))
        })
};

export const sortByTypeHair = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.type === "hair")
            dispatch(setProducts(formattedData))
        })
}

export const sortByTypeBody = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.type === "body")
            dispatch(setProducts(formattedData))
        })
}

export const sortByTypeFace = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.type === "face")
            dispatch(setProducts(formattedData))
        })
}

export const sortByTypeAccessories = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.type === "accessories")
            dispatch(setProducts(formattedData))
        })
}

export const sortByDiscount = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.discount === true)
            dispatch(setProducts(formattedData))
        })
}

export const sortByComplex = () => (dispatch) => {
    dispatch(setLoading()); 
    fetch(`${DATABASE_URL}/products.json`)
        .then(r => r.json())
        .then(data => {
            const formattedData = Object.keys(data)
            .map(key => {
                return {
                    id: key,
                    ...data[key]
                }
            })
            .filter(product => product.complex === true)
            dispatch(setProducts(formattedData))
        })
}

export const deleteProduct = (productId) => (dispatch) => {
    dispatch(setLoading());
    fetch(`${DATABASE_URL}/products/${productId}.json`, {
        method: 'DELETE'
    }).then(() => {
        dispatch(fetchProducts())
    })
}