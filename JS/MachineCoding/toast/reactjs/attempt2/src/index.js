import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Entry from './Entry';
import Notification from './components/Notification/index'
import { Provider } from 'react-redux'; 
import reducer from './store/reducer';
import { createStore } from 'redux';
import {applyMiddleware, compose} from 'redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Notification/>
    <Entry />
  {/* </React.StrictMode> */}
  </Provider>
);

