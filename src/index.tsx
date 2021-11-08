import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css'
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename='/Cv2.0'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);