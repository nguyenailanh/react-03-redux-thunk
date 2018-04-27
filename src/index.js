import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from "redux-thunk";
import todoReducer  from './store/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {localWorker} from './utils';

const store = createStore(todoReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
