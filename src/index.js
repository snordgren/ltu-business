import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Stickyfill from 'stickyfilljs';

const render = () => {
  ReactDOM.render(App(render), document.getElementById('root'));
  var elements = document.querySelectorAll('.sticky');
  Stickyfill.add(elements);
};

render();
