import { Outlet } from "react-router-dom";
// components
import OrderNav from "./nav";
// navigation
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { staffLoginService } from "../services/auth";


const OrderLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const currentPath = location.pathname;
        let isLoggedIn = staffLoginService();
        if (!isLoggedIn) {
            navigate('/order/login');
            setPages((p) => [{ 'label': 'login', value: 'order/login' }]);
        } else {
            setPages(p => [{ value: 'order/home', label: 'Home' },
            { value: '/order/dine-in-order', label: 'Dine-In' },
            { value: '/order/take-out-order', label: 'Take Out' },
            { value: '/order/orders-history', label: 'History' },
            { value: '/order/current-orders', label: 'Current' },
            { value: '*', label: '404' }, 
            { 'label': 'logout', value: 'order/login' }]);
        }
        if (currentPath == '/order') navigate('/order/home');
    }, [navigate, location]);
    return (
        <div >
            <OrderNav pages={pages} />
            
            <Outlet />      
        </div>
    )
}

export default OrderLayout; 