import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './components/navbar';
import ResponsiveAppBar from './components/NavBar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Home from './pages/home';
import NoPage from './pages/nopage';
import Layout from './pages/layout';
import Detail from './pages/detail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path='products' element={<Product />} />
            <Route path="products/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
