import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import {Provider} from 'react-redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';

const store = createStore (allReducers,{},applyMiddleware(logger(), thunk, promise()));

ReactDOM.render(
  <Provider store={store}>
  <WebPage/>
  </Provider>,
  document.getElementById('fieldToShow')
);
