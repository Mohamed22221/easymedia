import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import GlopalStyle from './styles/glopalStyle';


ReactDOM.render(
  <React.StrictMode>
    <GlopalStyle/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

