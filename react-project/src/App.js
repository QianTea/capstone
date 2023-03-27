import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoPage from './nopage';

// Restaurant Website
import WebLayout from './website/webLayout';
import WebHome from './website/pages/homePage';
import WebMenu from './website/pages/menuPage';
import WebContact from './website/pages/contactPage';

// Admin Panel
import Layout from './admin/layout';
import Login from './admin/pages/Login';
import Logout from './admin/components/logout';

import DashboardContent from './admin/pages/Home';
import AdminOrdersHistory from './admin/pages/OrdersHistory';
import RevenueHistory from './admin/pages/RevenueHistory';
import StoreInfo from './admin/pages/StoreInfo';
import Employee from './admin/pages/Employee';
import AddEmployee from "./admin/components/addEmployee";
import EditEmployee from './admin/components/editEmployee';
import AddRole from "./admin/components/addRole";
import EditRole from './admin/components/editRole';

import Products from './admin/pages/Menu';
import Detail from './admin/components/detail';
import AddFoodTag from './admin/components/addFoodType';
import EditTag from './admin/components/editTag';
import AddCategory from './admin/components/addCategory';
import EditCategory from './admin/components/editCategory';
import AddProduct from './admin/components/addProduct';
import EditDish from './admin/components/editDishes';

// Order System
import OrderLayout from './orderSystem/layout';
import StaffLogin from './orderSystem/pages/pageStaffLogin';
import EmpLogout from './orderSystem/components/empLogout';

import OrderHome from './orderSystem';
import PageDineInOrder from './orderSystem/pages/pageDineInOrder';
import TakeOutOrderInterface from './orderSystem/pages/takeOutOrder';
import OrdersHistory from './orderSystem/pages/pageOrderHistory';
import CurrentOrders from './orderSystem/pages/pageCurrentOrder';
import PhoneOrderPage from './orderSystem/pages/pagePhoneOrder';



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
          <Route path='/admin/logout' element={<Logout />} />

          <Route path="/admin/home" element={<DashboardContent />} />
          <Route path='/admin/orderhistory' element={<AdminOrdersHistory />} />
          <Route path='/admin/revenuehistory' element={<RevenueHistory />} />
          <Route path="/admin/store" element={<StoreInfo />} />
          <Route path="/admin/employee" element={<Employee />} />
          <Route path="/admin/employee/addRole" element={<AddRole />} />
          <Route path="/admin/employee/editRole/:roleId" element={<EditRole />} />
          <Route path="/admin/employee/addEmployee" element={<AddEmployee />} />
          <Route path="/admin/employee/editEmployee/:id" element={<EditEmployee />} />
         
          <Route path='/admin/menu' element={<Products />} />
          <Route path="/admin/menu/:id" element={<Detail />} />
          <Route path="/admin/menu/addFoodTag" element={<AddFoodTag />} />
          <Route path="/admin/menu/editFoodTag/:id" element={<EditTag />} />

          <Route path="/admin/menu/addCategory" element={<AddCategory />} />
          <Route path="/admin/menu/editCategory/:id" element={<EditCategory />} />

          <Route path="/admin/menu/addProduct" element={<AddProduct />} />
          <Route path="/admin/menu/editProduct/:id" element={<EditDish />} />
        </Route>
        
        {/*  Order System */}
        <Route path='/order' element={<OrderLayout />} >
          <Route path="/order/login" element={<StaffLogin />} />
          <Route path='/order/logout' element={<EmpLogout />} />

          <Route path='/order/home' element={<OrderHome />} />
          <Route path='/order/dine-in-order' element={<PageDineInOrder />} />
          <Route path='/order/take-out-order' element={<TakeOutOrderInterface />} />
          <Route path='/order/phone-order' element={<PhoneOrderPage />} />
          <Route path='/order/orders-history' element={<OrdersHistory />} />
          <Route path='/order/current-orders' element={<CurrentOrders />} />

        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
