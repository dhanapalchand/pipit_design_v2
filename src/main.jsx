import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
 
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Product />} />
            <Route path="About" element={<About />} />
            <Route path="Product" element={<Product />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
