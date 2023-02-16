import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './shared/components/navbar';
import ResponsiveAppBar from './shared/components/NavBar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './menu/product';
import Home from './home/home';
import NoPage from './shared/nopage';
import Layout from './shared/layout';
import Detail from './menu/detail';
import Login from './login/login';
import DashboardContent from './home/dashboard';
import Website from './website/website';
import AddProduct from './menu/addProduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<DashboardContent />} />
          <Route path="/website" element={<Website />} />
          <Route path='/products' element={<Product />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/products/addProduct" element={<AddProduct />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
