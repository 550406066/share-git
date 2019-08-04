import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {App} from './App'
import store from './store'
import './index.css';

const AppBox = (
  <Provider store ={store}>
    <App></App>
  </Provider>
)
ReactDOM.render(AppBox , document.getElementById('root'));


