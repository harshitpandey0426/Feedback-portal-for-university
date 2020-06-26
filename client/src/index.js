import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';

const store = createStore(()=> [],{},applyMiddleware()); // created a redux store
ReactDOM.render(
<provider store={store}><App /></provider>, // it is a react component that knows how to make changes in redux store, any time we want to make a change which is to be implemented in all react components we will use provider
document.querySelector('#root')
);
//'root' seen from index.html file in public folder

