import {createStore, 
        combineReducers, 
        applyMiddleware } from 'redux';

import cartReducer from "./cart/state/cartReducer";
import productReducer from "./product/state/productReducer";

// middleware
import thunk from "redux-thunk";

// FLUX- One one Store per React application
// Many States can be there in a store

// counter example +1, -1
//reducer.js
// action = {type: 'INCREMENT', payload: {value: 10}}
// {type: 'RESET'}

function counterReducer(state = 0, action) {
    console.log('Counter Reducer ', state, action)
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload.value
        case 'DECREMENT': 
            return state - action.payload.value
        case 'RESET':
            return 0
        
        default: // must
            return state;
    }
}


//auth/state/authReducer.js
const INITIAL_AUTH_STATE = {
    authenticated: false,
    // userprofile
    // user token
}

function authReducer(state = INITIAL_AUTH_STATE, action) {
    switch(action.type) {
        case 'LOGIN': 
            // todo: set token, user profile
            return {...state, authenticated: true}
        case 'LOGOUT': 
            // remove token, clean data
        return {...state, authenticated: false}
        default:
            return state;
    }
}


// store shall call reducer, whenever we do store.dispatch
// store shall also reducer, very first time while doing createStore
// to initialize default state
// const store = createStore(counterReducer)
//  store.getState() returns value 0 (number) with single reducer

const rootReducer = combineReducers({
    // stateName: reducer function() {}
    counter: counterReducer, 
    items: cartReducer,
    productState: productReducer,
    authState: authReducer
    // add as many state with reducers
})


// middlware.js
function loggerMiddleware(store) {
    return function(nextFn) {
        return function (action) { // store.dispatch(action)
            console.log("**Type of Action", typeof action)
            console.log("Logger ", action);

            // example of how thunk, implement action as function
            // if (typeof action === 'function') {
            //     // call the function, this function is implemented in actions.js
            //     return action(store.dispatch)
            // }

            // we cannot empty, doesn't reduces
            // if (action.type == 'CART.EMPTY_CART')
            //     return true;

            // forward to next middleware,
            // if no middleware, it goes to reducers
            let result = nextFn(action)

            return result;
        }
    }
}

const store = createStore(rootReducer, 
                          applyMiddleware(loggerMiddleware, thunk))

// store.getState(), output?? { counter: 0, items: [] } object type

export default store;