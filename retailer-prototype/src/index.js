import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './ClientDashBoardApp';
import reportWebVitals from './reportWebVitals';
import ClientDashBoardApp from './ClientDashBoardApp'

ReactDOM.render(
  <React.StrictMode>
    <ClientDashBoardApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
