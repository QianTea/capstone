import { Outlet } from "react-router-dom";
// components
import OrderNav from "./components/nav";
// navigation
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { staffLoginService } from "./services/auth";

const styles = {
//     page: {
//       height: "100vh",
//       backgroundColor: '#bfbfbf',
//   },
  };

const OrderLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const currentPath = location.pathname;
        let isLoggedIn = staffLoginService();
        if (!isLoggedIn) {
            if (currentPath != '/order/login') navigate('/order/login');
            setPages((p) => [{ 'label': 'login', value: 'order/login' }]);
        } else {
            setPages(p => [{ value: 'order/home', label: 'Home' },
            { value: 'order/dine-in-order', label: 'Dine-In' },
            { value: 'order/take-out-order', label: 'Take Out' },
            { value: 'order/phone-order', label: 'Phone' },
            { value: 'order/current-orders', label: 'Tables' },
            { value: 'order/current-orders', label: 'Current' },
            { value: 'order/orders-history', label: 'History' },
            { value: 'order/logout', label: 'logout'  }]);
        }
        if (currentPath == '/order/layout') navigate('/order/home');
    }, [navigate, location, setPages]);
    return (
        <div style={styles.page}>
            <OrderNav pages={pages} />
            
            <Outlet />      
        </div>
    )
}

export default OrderLayout; 