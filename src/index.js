import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CartState from './context/cart/CartState';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartState>
  <App />
  </CartState>
);
