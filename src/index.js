import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const render = () => {
  ReactDOM.render(App(render), document.getElementById('root'));
};

render();
