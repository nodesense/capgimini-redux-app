REDUX - Sync

dispatch
reducers
subscribe callback

Where you write async code in React Native, React/Redux?
    Redux
        Data
        Business
        Data API (Async)?

store.dispatch(action) ==>      middleware(s)                 ==> reducer
                                        forward the action to reducer
                                        stop the action
                                        modify the action

    M1 ====>            M2 =======>             M3    =========>Reducers

    nextFn(action)       nextFn(action)


Making Ajax call in React-Redux Apps

Reduc-thunk is a middleware
helps us to implement ajax as action creators