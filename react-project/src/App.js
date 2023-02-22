import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoPage from './nopage';

// Admin Panel
import Layout from './adminPanel/shared/layout';
import Login from './adminPanel/login/login';
import DashboardContent from './adminPanel/home/dashboard';
import StoreInfo from './adminPanel/store/storeInfo';
import Product from './adminPanel/menu/menu';
import Detail from './adminPanel/menu/detail';
import AddFoodType from './adminPanel/menu/addFoodType';
import AddCategory from './adminPanel/menu/addCategory';
import AddProduct from './adminPanel/menu/addProduct';
import Staff from './adminPanel/staff/staff';
import AddStaff from "./adminPanel/staff/addStaff";
import AddRole from "./adminPanel/staff/addRole";

// Restaurant Website
import WebLayout from './website/webLayout';
import WebHome from './website/homePage';
import WebMenu from './website/menuPage';
import WebContact from './website/contactPage';



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
          <Route path="/admin/staff/addRole" element={<AddRole />} />
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
