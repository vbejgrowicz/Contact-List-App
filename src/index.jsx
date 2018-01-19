import React from 'react';
import REACTDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactApp from './reducers';
import App from './components/App';
import '../assets/stylesheets/style.scss';
import initContacts from './initContacts';

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(contactApp, initContacts, reduxTools);

// FOR DEV ONLY
store.subscribe(() => {
  console.log('store updated', store.getState());
});

REACTDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
