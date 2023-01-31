import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './components/navbar';
import ResponsiveAppBar from './components/NavBar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Price from './pages/price';
import NoPage from './pages/nopage';
import Layout from './pages/layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="products" element={<Product />} />
            <Route path="pricing" element={<Price />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
