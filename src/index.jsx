import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-notifications/lib/notifications.css';
// import reportWebVitals from "./reportWebVitals";
const Index = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
