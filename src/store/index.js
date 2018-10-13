import { createStore } from 'redux';
import combinedReducer from './combinedReducer'

// this function create a store

export default function(state = {}) {
    
    //state is empty
    const store = createStore(
        combinedReducer,
        state
    )

    return store

}