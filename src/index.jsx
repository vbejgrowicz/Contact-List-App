import React from 'react';
import REACTDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactApp from './reducers';
import '../assets/stylesheets/style.scss';

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(contactApp, reduxTools);

REACTDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root'),
);
