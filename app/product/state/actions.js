//sync
export  function initProducts(products) {
    return {
        type: 'INIT_PRODUCTS',
        payload: {
            products
        }
    }
}

//sync
// return type of loading function? Action Object {type: ....}
export  function loading(loading) {
    return {
        type: 'LOADING',
        payload: {
            loading
        }
    }
}

// TODO: Implement Ajax call here
// async api calls
// Using thunk, we shall dispatch an function as a action
// thunk expects function as action
export function fetchProducts() {
    console.log("starting fetch"); // step 1

    // to be called by thunk middleware, 
    // thunk shall pass dispatch as an argument
    return function(dispatch) {
        console.log("Called by thunk ")

        dispatch(loading(true));

        fetch("http://g3.nodesense.ai:7070/api/products")
        .then ( response => response.json() )
        .then (products => {
            // step 3
            console.log("Got products", products.length);
            // use initProducts action to initialize data
            dispatch(initProducts(products));
            dispatch(loading(false));
        })
    }
    console.log("fetch complete"); // step 2
}



// api.js/service.js