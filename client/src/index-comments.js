import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
// import './index.css';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));
// it is a react component that knows how to make changes in redux store, any time we want to make a change which is to be implemented in all react components we will use provider 
//'root' seen from index.html file in public folder

