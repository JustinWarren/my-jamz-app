//THIS IS THE ENTRY POINT FOR REACT
//REACT, REACTDOM AND MAIN APP COMPONENT(LINE 6) ARE IMPORTED HERE
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//THIS RENDERS THE APP(APP.JS) ELEMENT INTO THE DIV WITH ID OF ROOT IN INDEX.HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

