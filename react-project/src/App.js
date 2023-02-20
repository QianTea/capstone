import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Admin Panel
import Layout from './shared/layout';
import Login from './login/login';
import DashboardContent from './home/dashboard';
import StoreInfo from './store/storeInfo';
import Product from './menu/menu';
import Detail from './menu/detail';
import AddFoodType from './menu/addFoodType';
import AddCategory from './menu/addCategory';
import AddProduct from './menu/addProduct';
import Staff from './staff/staff';
import AddStaff from "./staff/addStaff";
import NoPage from './shared/nopage';
// Restaurant Website
import WebHome from './web/homePage';
import WebMenu from './web/menuPage';
import WebContact from './web/contactPage';

import WebLayout from './web/webLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/home" element={<DashboardContent />} />
          <Route path="/admin/store" element={<StoreInfo />} />
          <Route path='/admin/menu' element={<Product />} />
          <Route path="/admin/menu/:id" element={<Detail />} />
          <Route path="/admin/menu/addFoodType" element={<AddFoodType />} />
          <Route path="/admin/menu/addCategory" element={<AddCategory />} />
          <Route path="/admin/menu/addProduct" element={<AddProduct />} />
          <Route path="/admin/staff" element={<Staff />} />
          <Route path="/admin/staff/addStaff" element={<AddStaff />} />
        </Route>
        <Route path="/" element={<WebLayout />} >
          <Route path="/home" element={<WebHome />} />
          <Route path="/menu" element={<WebMenu />} />
          <Route path="/contact" element={<WebContact />} />
        </Route>



        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
