import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import AppData from './AppData/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppData>
      <App />
    </AppData>
    <ToastContainer position="top-right" autoClose={2000} />
  </React.StrictMode>
);


