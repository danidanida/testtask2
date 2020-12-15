import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css' 
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './app'; 

import { startMirage } from './server-mock'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}  

ReactDOM.render(
  <div>
<App/>
  </div>,
  document.getElementById('global')
);
reportWebVitals();
