import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-unused-vars
import styles from './index.module.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';
import {addGlobalData} from './utils/DataUtil';

addGlobalData();

const store = ConfigureStore();

if (window) {
  // Hacky way. Should never be done in production but for the purpose of this problem
  // statement, this is needed, as store needs to be updated by browser console.
  window.store = store;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
