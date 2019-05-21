import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Transactions from './transactions';
import transactionsReducer from './reducers/transactions_reducer';
import {createStore, compose} from 'redux';
import{Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(transactionsReducer,[], composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Transactions />
  </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
