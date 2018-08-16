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
export  function loading(loading) {
    return {
        type: 'LOADING',
        payload: {
            loading
        }
    }
}

// TODO: Implement Ajax call here