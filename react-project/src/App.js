import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NoPage from './nopage';

// Restaurant Website
import WebLayout from './website/webLayout';
import WebHome from './website/homePage';
import WebMenu from './website/menuPage';
import WebContact from './website/contactPage';

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

// Order System
import OrderLayout from './orderSystem/shared/layout';
import StaffLogin from './orderSystem/staffLogin/staffLogin';
import OrderHome from './orderSystem/order/home';
import DineInOrderInterface from './orderSystem/order/components/dineInOrder';
import TakeOutOrderInterface from './orderSystem/order/components/takeOutOrder';
import OrdersHistory from './orderSystem/orderHistory/orderHistory';
import CurrentOrders from './orderSystem/currentOrder/currentOrder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Store Website */}
        <Route path="/" element={<WebLayout />} >
          <Route path="/home" element={<WebHome />} />
          <Route path="/menu" element={<WebMenu />} />
          <Route path="/contact" element={<WebContact />} />
        </Route>
        {/* Admin Panel */}
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
        {/*  Order System */}
        <Route path='/order' element={<OrderLayout />} >
          <Route path="/order/login" element={<StaffLogin />} />
          <Route path='/order/home' element={<OrderHome />} />
          <Route path='/order/dine-in-order' element={<DineInOrderInterface />} />
          <Route path='/order/take-out-order' element={<TakeOutOrderInterface />} />
          <Route path='/order/orders-history' element={<OrdersHistory />} />
          <Route path='/order/current-orders' element={<CurrentOrders />} />
          
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
