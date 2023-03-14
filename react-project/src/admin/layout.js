import { Outlet } from "react-router-dom";
//components
import ResponsiveAppBar from "./components/Navbar";
import Copyright from './components/Copyright';
// navigation
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginService } from "./services/auth";

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pages, setPages] = useState([]);
    useEffect(() => {
        const currentPath = location.pathname;
        let isLoggedIn = loginService();
        if (!isLoggedIn) {
            navigate('/admin/login');
            setPages((p) => [{ 'label': 'login', value: 'admin/login' }]);
        } else {
            setPages(p => [{ value: 'admin/home', label: 'Home' },
            { value: 'admin/store', label: 'StoreInfo' },
            { value: 'admin/menu', label: 'Menu' },
            { value: 'admin/employee', label: 'Employee' },

            { value: 'admin/logout', label: 'logout', }]);
        }
        if (currentPath == '/admin') navigate('/admin/home');
    }, [navigate, location]);
    return (
        <>
            <ResponsiveAppBar pages={pages} />
            <Outlet />
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </>
    )
}

export default Layout; 