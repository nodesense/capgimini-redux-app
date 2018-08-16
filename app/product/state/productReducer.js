const INITIAL_STATE = {
    products: [],
    loading: false
}

// Should not write Ajax/Aync code in your reducer
export default function productReducer(state = INITIAL_STATE, 
                                        action ) {
    switch(action.type) {
        // data is read somewhere else, here only to initialize your state
        case 'INIT_PRODUCTS':
            return {...state, products: action.payload.products}
        case 'LOADING':
            return {...state, products: action.payload.loading}
        default:
            return state;
    }                                            
}