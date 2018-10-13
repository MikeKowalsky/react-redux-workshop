import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store'
import * as serviceWorker from './serviceWorker';


// configureStore, with encapsulates all reducers
const store = configureStore({})

//Wrap <Main /> Component inside the <Provider />  to avail store to all child Components
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
