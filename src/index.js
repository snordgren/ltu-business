import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const render = () => {
  ReactDOM.render(App(render), document.getElementById('root'));
};

render();
