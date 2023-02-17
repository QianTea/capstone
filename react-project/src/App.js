import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './shared/components/navbar';
import ResponsiveAppBar from './shared/components/NavBar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './menu/menu';
import Home from './home/home';
import NoPage from './shared/nopage';
import Layout from './shared/layout';
import Detail from './menu/detail';
import Login from './login/login';
import DashboardContent from './home/dashboard';
import StoreInfo from './store/storeInfo';
import AddProduct from './menu/addProduct';
import AddCategory from './menu/addCategory';
import AddFoodType from './menu/addFoodType';
import Staff from './staff/staffs';
import AddStaff from "./staff/addStaff";
import WebDemo from './webdemo/webDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<DashboardContent />} />
          <Route path="/store" element={<StoreInfo />} />
          <Route path='/menu' element={<Product />} />
            <Route path="/menu/:id" element={<Detail />} />
            <Route path="/menu/addFoodType" element={<AddFoodType />} />
            <Route path="/menu/addCategory" element={<AddCategory />} />
            <Route path="/menu/addProduct" element={<AddProduct />} />
          <Route path="/staffs" element={<Staff />} />  
            <Route path="/staffs/addStaff" element={<AddStaff />} />
          <Route path="/website" element={<WebDemo />} />  
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>

    
  );
}

export default App;
