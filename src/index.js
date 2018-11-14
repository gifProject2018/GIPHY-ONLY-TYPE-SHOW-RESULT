import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';
import './index.css';
import App from './App';


const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


