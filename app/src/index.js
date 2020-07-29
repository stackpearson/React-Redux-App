import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { globalReducer } from './reducers/globalReducer';

const store = createStore(globalReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


