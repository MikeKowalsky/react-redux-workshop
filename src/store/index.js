import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import combinedReducer from './combinedReducer'

// this function create a store

export default function(state = {}) {
    
    //state is empty
    const store = createStore(
        combinedReducer,
        // applyMiddleware(thunk),
        state
    )

    return store

}